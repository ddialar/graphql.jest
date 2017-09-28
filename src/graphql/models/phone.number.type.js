import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull
} from 'graphql';

var ObjectType = new GraphQLObjectType({
    name: 'PhoneNumber',
    fields: () => ({
        number: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString }
    })
});

var InputType = new GraphQLInputObjectType({
    name: 'PhoneNumberInput',
    fields: () => ({
        number: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString }
    })
});

export {
    ObjectType,
    InputType
};