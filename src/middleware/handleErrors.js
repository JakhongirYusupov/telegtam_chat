
export const clientError = (req, res, error) => {
    console.log(error);
    return res.send(error)
}