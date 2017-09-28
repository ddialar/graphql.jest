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
        let userFields = UserType.getFields();

        expect(userFields).toHaveProperty('_id');
        expect(userFields._id.type).toMatchObject(graphql.GraphQLID);
        expect(userFields).toHaveProperty('username');
        expect(userFields.username.type).toMatchObject(graphql.GraphQLString);
        expect(userFields).toHaveProperty('password');
        expect(userFields.password.type).toMatchObject(graphql.GraphQLString);
        expect(userFields).toHaveProperty('token');
        expect(userFields.token.type).toMatchObject(graphql.GraphQLString);
        expect(userFields).toHaveProperty('role');
        expect(userFields.role.type).toMatchObject(graphql.GraphQLInt);
        expect(userFields).toHaveProperty('name');
        expect(userFields.name.type).toMatchObject(graphql.GraphQLString);
        expect(userFields).toHaveProperty('surname');
        expect(userFields.surname.type).toMatchObject(graphql.GraphQLString);
        expect(userFields).toHaveProperty('phoneNumber');
        expect(userFields.phoneNumber.type).toMatchObject(new graphql.GraphQLList(PhoneNumberType.ObjectType));
        expect(userFields).toHaveProperty('emailAddress');
        expect(userFields.emailAddress.type).toMatchObject(new graphql.GraphQLList(EmailAddressType.ObjectType));
        expect(userFields).toHaveProperty('locale');
        expect(userFields.locale.type).toMatchObject(graphql.GraphQLString);
        expect(userFields).toHaveProperty('isEnabled');
        expect(userFields.isEnabled.type).toMatchObject(graphql.GraphQLBoolean);
        expect(userFields).toHaveProperty('lastLoginTimestamp');
        expect(userFields.lastLoginTimestamp.type).toMatchObject(TimestampType);
        expect(userFields).toHaveProperty('createdAt');
        expect(userFields.createdAt.type).toMatchObject(TimestampType);
        expect(userFields).toHaveProperty('createdBy');
        expect(userFields.createdBy.type).toMatchObject(graphql.GraphQLID);
        expect(userFields).toHaveProperty('updatedAt');
        expect(userFields.updatedAt.type).toMatchObject(TimestampType);
        expect(userFields).toHaveProperty('updatedBy');
        expect(userFields.updatedBy.type).toMatchObject(graphql.GraphQLID);
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