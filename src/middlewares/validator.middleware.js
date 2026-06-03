// Usually checks validation result.Did validation fail?

// If yes:

// stop request
// send errors

// If no:

// continue to middleware/controller using next()

import { validationResult} from "express-validator";
import { ApiError } from "../utils/api-error.js";

export const validate = (req,res,next) => {
    const errors = validationResult(req);
    if(errors.isEmpty()){
        return next();
    }
    const extractErrors = [];
    errors.array().map((err)=>
        extractErrors.push({
            [err.path]: err.msg,

        }),
);
    throw new ApiError(422, "Received data is not valid", extractErrors);
};