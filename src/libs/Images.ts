export const GetFile = (e, callback: (input: File, url: string | ArrayBuffer) => void) => {
    let input = e.target;

    let reader = new FileReader();
    reader.onload = function (e) {
        let dataURL = reader.result;
        callback(input.files[0], dataURL);
    };
    reader.readAsDataURL(input.files[0]);
};
