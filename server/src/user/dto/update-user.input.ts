import { CreateuserInput } from './create-user.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { Schema as MongooSchema } from 'mongoose'

@InputType()
export class UpdateuserInput extends PartialType(CreateuserInput) {
  @Field(() => String)
  _id: MongooSchema.Types.ObjectId;
}
