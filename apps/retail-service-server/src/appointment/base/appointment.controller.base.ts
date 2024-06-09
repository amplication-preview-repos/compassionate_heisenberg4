/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AppointmentService } from "../appointment.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AppointmentCreateInput } from "./AppointmentCreateInput";
import { Appointment } from "./Appointment";
import { AppointmentFindManyArgs } from "./AppointmentFindManyArgs";
import { AppointmentWhereUniqueInput } from "./AppointmentWhereUniqueInput";
import { AppointmentUpdateInput } from "./AppointmentUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AppointmentControllerBase {
  constructor(
    protected readonly service: AppointmentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Appointment })
  @nestAccessControl.UseRoles({
    resource: "Appointment",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAppointment(
    @common.Body() data: AppointmentCreateInput
  ): Promise<Appointment> {
    return await this.service.createAppointment({
      data: {
        ...data,

        service: data.service
          ? {
              connect: data.service,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        dateTime: true,
        id: true,

        service: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Appointment] })
  @ApiNestedQuery(AppointmentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Appointment",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async appointments(@common.Req() request: Request): Promise<Appointment[]> {
    const args = plainToClass(AppointmentFindManyArgs, request.query);
    return this.service.appointments({
      ...args,
      select: {
        createdAt: true,
        dateTime: true,
        id: true,

        service: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Appointment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Appointment",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async appointment(
    @common.Param() params: AppointmentWhereUniqueInput
  ): Promise<Appointment | null> {
    const result = await this.service.appointment({
      where: params,
      select: {
        createdAt: true,
        dateTime: true,
        id: true,

        service: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Appointment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Appointment",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAppointment(
    @common.Param() params: AppointmentWhereUniqueInput,
    @common.Body() data: AppointmentUpdateInput
  ): Promise<Appointment | null> {
    try {
      return await this.service.updateAppointment({
        where: params,
        data: {
          ...data,

          service: data.service
            ? {
                connect: data.service,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          dateTime: true,
          id: true,

          service: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Appointment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Appointment",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAppointment(
    @common.Param() params: AppointmentWhereUniqueInput
  ): Promise<Appointment | null> {
    try {
      return await this.service.deleteAppointment({
        where: params,
        select: {
          createdAt: true,
          dateTime: true,
          id: true,

          service: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
