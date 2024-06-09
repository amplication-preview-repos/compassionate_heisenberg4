/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Appointment } from "./Appointment";
import { AppointmentCountArgs } from "./AppointmentCountArgs";
import { AppointmentFindManyArgs } from "./AppointmentFindManyArgs";
import { AppointmentFindUniqueArgs } from "./AppointmentFindUniqueArgs";
import { CreateAppointmentArgs } from "./CreateAppointmentArgs";
import { UpdateAppointmentArgs } from "./UpdateAppointmentArgs";
import { DeleteAppointmentArgs } from "./DeleteAppointmentArgs";
import { Service } from "../../service/base/Service";
import { User } from "../../user/base/User";
import { AppointmentService } from "../appointment.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Appointment)
export class AppointmentResolverBase {
  constructor(
    protected readonly service: AppointmentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Appointment",
    action: "read",
    possession: "any",
  })
  async _appointmentsMeta(
    @graphql.Args() args: AppointmentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Appointment])
  @nestAccessControl.UseRoles({
    resource: "Appointment",
    action: "read",
    possession: "any",
  })
  async appointments(
    @graphql.Args() args: AppointmentFindManyArgs
  ): Promise<Appointment[]> {
    return this.service.appointments(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Appointment, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Appointment",
    action: "read",
    possession: "own",
  })
  async appointment(
    @graphql.Args() args: AppointmentFindUniqueArgs
  ): Promise<Appointment | null> {
    const result = await this.service.appointment(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Appointment)
  @nestAccessControl.UseRoles({
    resource: "Appointment",
    action: "create",
    possession: "any",
  })
  async createAppointment(
    @graphql.Args() args: CreateAppointmentArgs
  ): Promise<Appointment> {
    return await this.service.createAppointment({
      ...args,
      data: {
        ...args.data,

        service: args.data.service
          ? {
              connect: args.data.service,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Appointment)
  @nestAccessControl.UseRoles({
    resource: "Appointment",
    action: "update",
    possession: "any",
  })
  async updateAppointment(
    @graphql.Args() args: UpdateAppointmentArgs
  ): Promise<Appointment | null> {
    try {
      return await this.service.updateAppointment({
        ...args,
        data: {
          ...args.data,

          service: args.data.service
            ? {
                connect: args.data.service,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Appointment)
  @nestAccessControl.UseRoles({
    resource: "Appointment",
    action: "delete",
    possession: "any",
  })
  async deleteAppointment(
    @graphql.Args() args: DeleteAppointmentArgs
  ): Promise<Appointment | null> {
    try {
      return await this.service.deleteAppointment(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Service, {
    nullable: true,
    name: "service",
  })
  @nestAccessControl.UseRoles({
    resource: "Service",
    action: "read",
    possession: "any",
  })
  async getService(
    @graphql.Parent() parent: Appointment
  ): Promise<Service | null> {
    const result = await this.service.getService(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Appointment): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
