import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateuserInput } from './dto/create-user.input';
import { UpdateuserInput } from './dto/update-user.input';

@Resolver('users')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createuser(@Args('createuserInput') createuserInput: CreateuserInput) {
    return this.userService.create(createuserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { 
    name: 'userByID', 
    description: 'Find user using their id' 
  })
  getuserById(
    @Args('id', { type: () => String }) id: String, ) {
    return this.userService.getuserById(id);
  }

  @Mutation(() => User)
  updateuser(
    @Args('updateuserInput') updateuserInput: UpdateuserInput,
    @Args('id', { type: () => String }) id: String
    ) {
    return this.userService.update(id, updateuserInput);
  }
  
  @Mutation(() => User)
  deleteuser(@Args('id') id: String) {
    return this.userService.delete(id);
  }
}
