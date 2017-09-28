import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull
} from 'graphql';

var ObjectType = new GraphQLObjectType({
    name: 'EmailAddress',
    fields: () => ({
        email: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString }
    })
});

var InputType = new GraphQLInputObjectType({
    name: 'EmailAddressInput',
    fields: () => ({
        email: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString }
    })
});

export {
    ObjectType,
    InputType
};