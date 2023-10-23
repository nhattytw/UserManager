import { Injectable } from '@nestjs/common';
import { CreateuserInput } from './dto/create-user.input';
import { UpdateuserInput } from './dto/update-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('user')
    private userModel: Model<UserDocument>
  ){}
  
  async findAll(): Promise<User[]> {
    return await this.userModel.find()
  }
  
  async getuserById(id: String): Promise<User>{
    return await this.userModel.findOne({ _id: id })
  }

  async create(createuserInput: CreateuserInput): Promise<User>{
    const newUser = new this.userModel(createuserInput)
    return await newUser.save()
  }

  async update(id: String, updateuserInput: UpdateuserInput): Promise<User>{
    return await this.userModel.findByIdAndUpdate(id, updateuserInput, { new: true })
  }

  async delete(id: String): Promise<User>{
    return (await this.userModel.findByIdAndRemove({ _id: id }))
  }
}
