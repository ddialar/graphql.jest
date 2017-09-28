const ROLES = {
    SYSADMIN: {
        value: 0,
        name: 'sysadmin'
    },
    ADMIN: {
        value: 1,
        name: 'admin'
    },
    USER: {
        value: 2,
        name: 'user'
    },
    GUEST: {
        value: 3,
        name: 'guest'
    }
};

const ROLES_ACTIONS = {
    ALL: 'all',
    WRITE: 'write',
    READ: 'read',
    UPDATE: 'update',
    DELETE: 'delete'
};

const ALLOWED_ROLES = {
    SYSADMIN_ALL: { name: ROLES.SYSADMIN.name, value: ROLES.SYSADMIN.value, action: ROLES_ACTIONS.ALL },

    ADMIN_ALL: { name: ROLES.ADMIN.name, value: ROLES.ADMIN.value, action: ROLES_ACTIONS.ALL },
    ADMIN_READ: { name: ROLES.ADMIN.name, value: ROLES.ADMIN.value, action: ROLES_ACTIONS.READ },
    ADMIN_UPDATE: { name: ROLES.ADMIN.name, value: ROLES.ADMIN.value, action: ROLES_ACTIONS.UPDATE },

    USER_ALL: { name: ROLES.USER.name, value: ROLES.USER.value, action: ROLES_ACTIONS.ALL },
    USER_READ: { name: ROLES.USER.name, value: ROLES.USER.value, action: ROLES_ACTIONS.READ },
    USER_UPDATE: { name: ROLES.USER.name, value: ROLES.USER.value, action: ROLES_ACTIONS.UPDATE },

    GUEST_UPDATE: { name: ROLES.GUEST.name, value: ROLES.GUEST.value, action: ROLES_ACTIONS.UPDATE },
};

export {
    ROLES,
    ROLES_ACTIONS,
    ALLOWED_ROLES
};