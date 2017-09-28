import 'jest';
import * as graphql from 'graphql';
import * as PhoneNumberType from '../../../src/graphql/models/phone.number.type';

describe('Testing PhoneNumberType ...', () => {
    test('fields integrity when it is used as \'ObjectType\'.', () => {
        let phoneNumberFields = PhoneNumberType.ObjectType.getFields();

        expect(phoneNumberFields).toHaveProperty('number');
        expect(phoneNumberFields.number.type).toMatchObject(new graphql.GraphQLNonNull(graphql.GraphQLString));
        expect(phoneNumberFields).toHaveProperty('description');
        expect(phoneNumberFields.description.type).toMatchObject(graphql.GraphQLString);
    });

    test('fields integrity when it is used as \'InputType\'.', () => {
        let phoneNumberFields = PhoneNumberType.InputType.getFields();

        expect(phoneNumberFields).toHaveProperty('number');
        expect(phoneNumberFields.number.type).toMatchObject(new graphql.GraphQLNonNull(graphql.GraphQLString));
        expect(phoneNumberFields).toHaveProperty('description');
        expect(phoneNumberFields.description.type).toMatchObject(graphql.GraphQLString);
    });
});