// C25: giả lập tải file trong 3 giây
function downloadFile(fileName: string): Promise<void> {
  return new Promise((resolve) => {
    console.log(`Bắt đầu tải ${fileName}...`);
    setTimeout(() => {
      console.log(`Đã tải xong ${fileName}`);
      resolve();
    }, 3000);
  });
}

downloadFile("baitap.pdf");

export { downloadFile };