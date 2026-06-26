import { Router } from "express";
import{
    addMembersToProject,
  createProject,
  deleteMember,
  getProjects,
  getProjectById,
  getProjectMembers,
  updateProject,
  deleteProject,
  updateMemberRole,
}from "../controllers/project.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";



import { createProjectValidator,
    addMembertoProjectValidator }
     from "../validators.js";
import { verifyJWT,
    validatorProjectPermisssion
 } from "../middlewares/auth.middleware.js";

 import { AvailableUserRole,
    UserRolesEnum } from "../utils/constants.js";

const router = Router();
router.use(verifyJWT); // This function ensures that everything written
//below it goes through verifyJWT first

router
   .route("/")
   .get(getProjects)
   .post(createProjectValidator(),validate, createProject);

router
   .route("/")
   .get(getProjects)
   .post(createProjectValidator(), validate, createProject);

router
   .route("/:projectId")
   .get(validateProjectPermission(AvailableUserRole), getProjectById)
   .put(
    validateProjectPermission([UserRolesEnum.ADMIN]),
    createProjectValidator(),
    validate,
    updateProject,
   )

   .delete(validateProjectPermission([UserRolesEnum.ADMIN]));

router
    .route("/:projectId/members")
    .get(getProjectMembers)
    .post(validatorProjectPermisssion([UserRolesEnum.ADMIN]),
    addMembertoProjectValidator(),
    validate,addMembersToProject)
router
     .route("/:projectId/members/:userId")
     .put(validatorProjectPermisssion([UserRolesEnum.ADMIN]),
          
        updateMemberRole)
    .delete(validatorProjectPermisssion(UserRolesEnum.ADMIN),
        deleteMember
    );

export default router;