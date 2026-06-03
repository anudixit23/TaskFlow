export const UserRolesEnum = {  //This creates an object containing all allowed user roles.
    ADMIN : "admin",
    POJECT_MANAGER : "project_manager",
    MEMBER : "member"
};

export const AvailableUserRole = Object.values(UserRolesEnum);//Object.values() extracts all values from the object.

export const TaskStatusEnum = {
  TODO: "todo",
  IN_PROGRESS: "in_progress",
  DONE: "done",
};

export const AvailableTaskStatues = Object.values(TaskStatusEnum);
