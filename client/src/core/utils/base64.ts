export const convertFileToBase64 = (files?: File[]) => {
  if (!files || files.length === 0) return;
  return new Promise<string>((resolve, reject) => {
    const file = files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      resolve(base64String);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
};

export const convertBase64ToFile = (
  base64: string = '',
  filename: string = '',
) => {
  try {
    const byteString = atob(base64.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab]);
    const file = new File([blob], filename);
    return [file];
  } catch (e) {
    console.log(e);
    return [];
  }
};
