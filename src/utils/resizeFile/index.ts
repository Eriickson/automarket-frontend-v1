import Resizer from "react-image-file-resizer";

export async function resizeFile(file: File) {
  return new Promise<File>((resolve) => {
    Resizer.imageFileResizer(
      file,
      // 4:3
      2000,
      2000,
      "WEBP",
      85,
      0,
      (uri) => {
        resolve(uri as File);
      },
      "file"
    );
  });
}
