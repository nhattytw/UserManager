import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateuserInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;
  
  @Field(() => String)
  gender: string;

  @Field(() => String)
  address: string;
}
 