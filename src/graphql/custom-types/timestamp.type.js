import { Kind } from 'graphql/language';
import { GraphQLScalarType } from 'graphql';

var _serialize = (value) => {
    if (value instanceof Date) {
        return value.getTime();
    } else if (typeof value === 'number') {
        return Math.trunc(value);
    } else if (typeof value === 'string') {
        return Date.parse(value);
    }
    return null;
};

var _parseValue = (value) => {
    if (value === null) {
        return null;
    }

    try {
        return new Date(value);
    } catch (err) {
        return null;
    }
};

var _parseLiteral = (ast) => {
    if (ast.kind === Kind.INT) {
        const num = parseInt(ast.value, 10);
        return new Date(num);
    } else if (ast.kind === Kind.STRING) {
        return _parseValue(ast.value);
    }
    return null;
};

const TimestampType = new GraphQLScalarType({
    name: 'Timestamp',
    description: 'The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch.',
    serialize: _serialize,
    parseValue: _parseValue,
    parseLiteral: _parseLiteral
});

export default TimestampType;