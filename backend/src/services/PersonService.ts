import {transaction, Transaction} from 'objection';

import {Person} from '../models';

interface CreateUserOptions {
  email: string;
  firstName: string;
  lastName: string;
}

interface UpdateUserOptions {
  personId: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface DeleteUserOptions {
  personId: string;
}

export class PersonService {
  public static async create(opts: CreateUserOptions): Promise<Person> {
    return Person.query().insert(opts);
  }

  public static async update({
    personId,
    ...rest
  }: UpdateUserOptions): Promise<Person> {
    return Person.query()
      .upsertGraph(rest)
      .where({id: personId});
  }

  public static async delete(opts: DeleteUserOptions): Promise<number> {
    return Person.query().deleteById(opts.personId);
  }
}
