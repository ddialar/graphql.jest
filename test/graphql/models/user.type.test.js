import 'jest';
import * as graphql from 'graphql';
import UserType from '../../../src/graphql/models/user.type';
import * as PhoneNumberType from '../../../src/graphql/models/phone.number.type';
import * as EmailAddressType from '../../../src/graphql/models/email.address.type';
import TimestampType from '../../../src/graphql/custom-types/timestamp.type';

import { 
    ROLES,
    ALLOWED_ROLES,
    ROLES_ACTIONS
} from '../../../src/graphql/common/roles';

describe('Testing UserType ...', () => {
    test('Fields integrity.', () => {
        let roleFields = UserType.getFields();

        expect(roleFields).toHaveProperty('_id');
        expect(roleFields._id.type).toMatchObject(graphql.GraphQLID);
        expect(roleFields).toHaveProperty('username');
        expect(roleFields.username.type).toMatchObject(graphql.GraphQLString);
        expect(roleFields).toHaveProperty('password');
        expect(roleFields.password.type).toMatchObject(graphql.GraphQLString);
        expect(roleFields).toHaveProperty('token');
        expect(roleFields.token.type).toMatchObject(graphql.GraphQLString);
        expect(roleFields).toHaveProperty('role');
        expect(roleFields.role.type).toMatchObject(graphql.GraphQLInt);
        expect(roleFields).toHaveProperty('name');
        expect(roleFields.name.type).toMatchObject(graphql.GraphQLString);
        expect(roleFields).toHaveProperty('surname');
        expect(roleFields.surname.type).toMatchObject(graphql.GraphQLString);
        expect(roleFields).toHaveProperty('phoneNumber');
        expect(roleFields.phoneNumber.type).toMatchObject(new graphql.GraphQLList(PhoneNumberType.ObjectType));
        expect(roleFields).toHaveProperty('emailAddress');
        expect(roleFields.emailAddress.type).toMatchObject(new graphql.GraphQLList(EmailAddressType.ObjectType));
        expect(roleFields).toHaveProperty('locale');
        expect(roleFields.locale.type).toMatchObject(graphql.GraphQLString);
        expect(roleFields).toHaveProperty('isEnabled');
        expect(roleFields.isEnabled.type).toMatchObject(graphql.GraphQLBoolean);
        expect(roleFields).toHaveProperty('lastLoginTimestamp');
        expect(roleFields.lastLoginTimestamp.type).toMatchObject(TimestampType);
        expect(roleFields).toHaveProperty('createdAt');
        expect(roleFields.createdAt.type).toMatchObject(TimestampType);
        expect(roleFields).toHaveProperty('createdBy');
        expect(roleFields.createdBy.type).toMatchObject(graphql.GraphQLID);
        expect(roleFields).toHaveProperty('updatedAt');
        expect(roleFields.updatedAt.type).toMatchObject(TimestampType);
        expect(roleFields).toHaveProperty('updatedBy');
        expect(roleFields.updatedBy.type).toMatchObject(graphql.GraphQLID);
    });

    test('Object-Type level roles.', () => {
        let userTypeDefinedRoles = UserType._typeConfig.allowedRoles;
        let userTypeAllowedRoles = [
            ALLOWED_ROLES.SYSADMIN_ALL, 
            ALLOWED_ROLES.USER_READ
        ];

        expect(userTypeDefinedRoles).toMatchObject(userTypeAllowedRoles);
    });
});