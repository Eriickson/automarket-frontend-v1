import Resizer from "react-image-file-resizer";


export interface ResizeFileArgs {
  file: File;
  maxSizeInKB?: number;
  maxDimensions?: [number, number];
}

interface ResizeFileResult {
  resizedFile: File;
  quality: number;
}

export async function resizeFile({
  file,
  maxSizeInKB,
  maxDimensions = [4000, 4000],
}: ResizeFileArgs): Promise<ResizeFileResult> {
  const resizeWithQualityCheck = async (
    file: File,
    quality: number,
    maxSizeInKB: number = 1024
  ): Promise<ResizeFileResult> => {
    return new Promise<ResizeFileResult>(async (resolve) => {
      Resizer.imageFileResizer(
        file,
        maxDimensions[0],
        maxDimensions[1],
        "JPEG",
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
