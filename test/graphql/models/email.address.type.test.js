import 'jest';
import * as graphql from 'graphql';
import * as EmailAddressType from '../../../src/graphql/models/email.address.type';

describe('Testing EmailAddressType ...', () => {
    test('fields integrity when it is used as \'ObjectType\'.', () => {
        let emailAddressFields = EmailAddressType.ObjectType.getFields();

        expect(emailAddressFields).toHaveProperty('email');
        expect(emailAddressFields.email.type).toMatchObject(new graphql.GraphQLNonNull(graphql.GraphQLString));
        expect(emailAddressFields).toHaveProperty('description');
        expect(emailAddressFields.description.type).toMatchObject(graphql.GraphQLString);
    });

    test('fields integrity when it is used as \'InputType\'.', () => {
        let emailAddressFields = EmailAddressType.InputType.getFields();

        expect(emailAddressFields).toHaveProperty('email');
        expect(emailAddressFields.email.type).toMatchObject(new graphql.GraphQLNonNull(graphql.GraphQLString));
        expect(emailAddressFields).toHaveProperty('description');
        expect(emailAddressFields.description.type).toMatchObject(graphql.GraphQLString);
    });
});