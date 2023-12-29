import Resizer from "react-image-file-resizer";

interface ResizeFileArgs {
  file: File;
  maxSizeInKB?: number;
}

interface ResizeFileResult {
  resizedFile: File;
  quality: number;
}

export async function resizeFile({ file, maxSizeInKB }: ResizeFileArgs): Promise<ResizeFileResult> {
  const resizeWithQualityCheck = async (
    file: File,
    quality: number,
    maxSizeInKB: number = 1024
  ): Promise<ResizeFileResult> => {
    return new Promise<ResizeFileResult>(async (resolve) => {
      Resizer.imageFileResizer(
        file,
        2000,
        2000,
        "WEBP",
        quality,
        0,
        async (uri) => {
          const resizedFile = uri as File;

          if (resizedFile.size / 1024 > maxSizeInKB && quality > 0) {
            quality -= 5;
            resolve(await resizeWithQualityCheck(file, quality, maxSizeInKB));
          } else {
            resolve({ resizedFile, quality });
          }
        },
        "file"
      );
    });
  };

  return resizeWithQualityCheck(file, 95, maxSizeInKB);
}
