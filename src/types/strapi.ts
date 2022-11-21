export type StrapiArrayType<T> = {
  data: Array<{
    id: number,
    attributes: {
      createdAt: string,
      publishedAt: string,
      updatedAt: string
    } & T
  }>
  meta: {
    pagination: {
      page: number,
      pageCount: number,
      pageSize: number,
      total: number
    }
  }
}

export type StrapiType<T> = {
  data: {
    id: number,
    attributes: {
      createdAt: string,
      publishedAt: string,
      updatedAt: string
    } & T
  }
  meta: {}
}

export type ServiceType = {
  Avatar: ImageType
  Description: string,
  Title: string,
}

export type ImageType = {
  data: {
    id: number,
    attributes: {
      alternativeText: string
      caption: string
      createdAt: string
      ext: string
      formats: any
      hash: string
      height: number
      mime: string
      name: string
      previewUrl: null | string
      provider: string
      provider_metadata: any
      size: number
      updatedAt: string
      url: string
      width: number
    }
  }
}

export type DoctorType = {
  Avatar: ImageType
  Name: string,
  Description: string
}

export type DoctorTypeAdditional = {
  Avatar: ImageType
  Name: string,
  Description: string
  AdditionalInfo: string
}

export type StrapiDoctorType = StrapiType<DoctorTypeAdditional>