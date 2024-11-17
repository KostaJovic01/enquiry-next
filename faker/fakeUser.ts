import { faker } from '@faker-js/faker';
import {User} from "@/types/User";

const fakeUser: User = {
    id: faker.string.uuid(),
    givenName: faker.person.firstName(),
    familyName: faker.person.lastName(),
    fullName: `${faker.person.firstName()} ${faker.person.lastName()}`,
    email: faker.internet.email(),
    emailVerified: faker.datatype.boolean(),
    language: faker.helpers.arrayElement(['en', 'it', 'de', 'ms']),
    organizationCount: faker.number.int(),
    invitedAt: faker.date.past().toISOString(),
    isConfirmedAuth: faker.datatype.boolean(),
    isAdditive: faker.datatype.boolean(),
    isSupport: faker.datatype.boolean(),
    isSuperAdmin: faker.datatype.boolean(),
    isPartner: faker.datatype.boolean(),
    new: faker.datatype.boolean()
};

export default fakeUser;