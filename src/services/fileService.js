
const uploadSingleFile = async (fileObject) => {
    let uploadPath = __dirname + fileObject.name;

    try {
        await fileObject.mv(uploadPath);
        return {
            status: 'success',
            path: 'link-image',
            error: null,
        }
    } catch (error){
        console.log(error);
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(error),
        }
    }
}

const uploadMultipleFiles = async (filesObject) => {}

module.exports = {uploadSingleFile, uploadMultipleFiles};