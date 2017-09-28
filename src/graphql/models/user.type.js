import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList
} from 'graphql';

import { ALLOWED_ROLES } from '../common/roles';

import * as PhoneNumberType from './phone.number.type';
import * as EmailAddressType from './email.address.type';
import TimestampType from '../custom-types/timestamp.type';

var UserType = new GraphQLObjectType({
    name: 'User',
    allowedRoles: [
        ALLOWED_ROLES.SYSADMIN_ALL,
        ALLOWED_ROLES.USER_READ
    ],
    fields: () => ({
        _id: { type: GraphQLID },
        username: {
            type: GraphQLString,
            description: 'Public string that combined with the password, will identify the user.'
        },
        password: {
            type: GraphQLString,
            description: 'Secret string that combined with the username, will identify the user.'
        },
        token: { 
            type: GraphQLString,
            description: 'Alphanumeric string that will be provided by the user in order to work with the application, once it is successfully authenticated.'
        },
        role: {
            type: GraphQLInt,
            description: 'Access leved assigned to the user.'
        },
        name: { 
            type: GraphQLString,
            allowedRoles: [
                ALLOWED_ROLES.USER_READ,
                ALLOWED_ROLES.USER_UPDATE
            ],
            description: 'User\'s first name.'
        },
        surname: { 
            type: GraphQLString,
            allowedRoles: [
                ALLOWED_ROLES.USER_READ,
                ALLOWED_ROLES.USER_UPDATE
            ],
            description: 'User\'s second name.'
        },
        phoneNumber: { 
            type: new GraphQLList(PhoneNumberType.ObjectType),
            allowedRoles: [
                ALLOWED_ROLES.USER_READ
            ],
        },
        emailAddress: { 
            type: new GraphQLList(EmailAddressType.ObjectType),
            allowedRoles: [
                ALLOWED_ROLES.USER_READ
            ],
        },
        locale: { 
            type: GraphQLString,
            description: 'User\'s language.'
        },
        isEnabled: { 
            type: GraphQLBoolean,
            description: 'This field defines if the user is able to work with the application.'
        },
        lastLoginTimestamp: { 
            type: TimestampType,
            description: 'This field contains the user\'s last successful login timestamp.'
        },
        createdAt: { 
            type: TimestampType,
            description: 'This field contains the timestamp when the user was recorded on the database.'
        },
        createdBy: { 
            type: GraphQLID,
            description: 'This field contains ID of the user or entity that created this user.'
        },
        updatedAt: { 
            type: TimestampType,
            description: 'This field contains the last timestamp the user record was updated.'
        },
        updatedBy: { 
            type: GraphQLID,
            description: 'This field contains ID of the user or entity that updated this user.'
        },
    })
});

export default UserType;