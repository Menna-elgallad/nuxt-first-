import type { GraphQLClient } from 'graphql-request';
import type * as Dom from 'graphql-request/dist/types.dom';
import { gql } from 'graphql-request';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  GraphQLStringOrFloat: any;
  JSON: any;
};

export type Article_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Article_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Article_Filter>>>;
  category?: InputMaybe<Category_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  episodes?: InputMaybe<Shows_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  press_link?: InputMaybe<String_Filter_Operators>;
  shows?: InputMaybe<Shows_Filter>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Article_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
  video?: InputMaybe<String_Filter_Operators>;
};

export type Article_Translations_Filter = {
  Article_id?: InputMaybe<Article_Filter>;
  _and?: InputMaybe<Array<InputMaybe<Article_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Article_Translations_Filter>>>;
  content?: InputMaybe<String_Filter_Operators>;
  cover?: InputMaybe<Directus_Files_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Career_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Career_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Career_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Career_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Career_Translations_Filter = {
  Career_id?: InputMaybe<Career_Filter>;
  _and?: InputMaybe<Array<InputMaybe<Career_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Career_Translations_Filter>>>;
  content?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_id?: InputMaybe<Languages_Filter>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type About_Filter = {
  _and?: InputMaybe<Array<InputMaybe<About_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<About_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  translations?: InputMaybe<About_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type About_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<About_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<About_Translations_Filter>>>;
  about_id?: InputMaybe<About_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
};

export type Category_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Category_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Category_Filter>>>;
  articles?: InputMaybe<Article_Filter>;
  articles_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Category_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Category_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Category_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Category_Translations_Filter>>>;
  category_id?: InputMaybe<Category_Filter>;
  cover?: InputMaybe<Directus_Files_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Create_Contact_Input = {
  career?: InputMaybe<Scalars['Int']>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  message?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
  source?: InputMaybe<Scalars['String']>;
  status: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['String']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_FunctionsInput = {
  day?: InputMaybe<Scalars['Int']>;
  hour?: InputMaybe<Scalars['Int']>;
  minute?: InputMaybe<Scalars['Int']>;
  month?: InputMaybe<Scalars['Int']>;
  second?: InputMaybe<Scalars['Int']>;
  week?: InputMaybe<Scalars['Int']>;
  weekday?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<String_Filter_Operators>;
  folder?: InputMaybe<String_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<Directus_Users_Filter>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<Directus_Users_Filter>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Users_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  first_name?: InputMaybe<String_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
};

export type Homepage_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Homepage_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Homepage_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  translations?: InputMaybe<Homepage_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Homepage_Translations_Files_1_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Homepage_Translations_Files_1_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Homepage_Translations_Files_1_Filter>>>;
  directus_files_id?: InputMaybe<Directus_Files_Filter>;
  homepage_translations_id?: InputMaybe<Homepage_Translations_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Homepage_Translations_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Homepage_Translations_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Homepage_Translations_Files_Filter>>>;
  directus_files_id?: InputMaybe<Directus_Files_Filter>;
  homepage_translations_id?: InputMaybe<Homepage_Translations_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Homepage_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Homepage_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Homepage_Translations_Filter>>>;
  brands_list?: InputMaybe<Homepage_Translations_Files_1_Filter>;
  brands_list_func?: InputMaybe<Count_Function_Filter_Operators>;
  home_about_description?: InputMaybe<String_Filter_Operators>;
  home_about_title?: InputMaybe<String_Filter_Operators>;
  home_intro_cover?: InputMaybe<Directus_Files_Filter>;
  home_intro_title?: InputMaybe<String_Filter_Operators>;
  home_intro_url?: InputMaybe<String_Filter_Operators>;
  homepage_id?: InputMaybe<Homepage_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
};

export type Languages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Languages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Languages_Filter>>>;
  code?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Pages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pages_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Pages_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Pages_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pages_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pages_Translations_Filter>>>;
  content?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  pages_id?: InputMaybe<Pages_Filter>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Posters_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Posters_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Posters_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  translations?: InputMaybe<Posters_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Posters_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Posters_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Posters_Translations_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  normal2_cover?: InputMaybe<Directus_Files_Filter>;
  normal2_title?: InputMaybe<String_Filter_Operators>;
  normal2_url?: InputMaybe<String_Filter_Operators>;
  normal_cover?: InputMaybe<Directus_Files_Filter>;
  normal_title?: InputMaybe<String_Filter_Operators>;
  normal_url?: InputMaybe<String_Filter_Operators>;
  posters_id?: InputMaybe<Posters_Filter>;
  wide2_cover?: InputMaybe<Directus_Files_Filter>;
  wide2_title?: InputMaybe<String_Filter_Operators>;
  wide2_url?: InputMaybe<String_Filter_Operators>;
  wide_cover?: InputMaybe<Directus_Files_Filter>;
  wide_title?: InputMaybe<String_Filter_Operators>;
  wide_url?: InputMaybe<String_Filter_Operators>;
};

export type Shows_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Shows_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Shows_Filter>>>;
  all_episodes?: InputMaybe<Article_Filter>;
  all_episodes_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  episodes?: InputMaybe<Shows_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Shows_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Shows_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Shows_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Shows_Translations_Filter>>>;
  cover?: InputMaybe<Directus_Files_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  shows_id?: InputMaybe<Shows_Filter>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _ends_with?: InputMaybe<Scalars['String']>;
  _eq?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _ncontains?: InputMaybe<Scalars['String']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
  _nends_with?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _nstarts_with?: InputMaybe<Scalars['String']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _starts_with?: InputMaybe<Scalars['String']>;
};

export type Team_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Team_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Team_Filter>>>;
  cover?: InputMaybe<Directus_Files_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Team_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Team_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Team_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Team_Translations_Filter>>>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  team_id?: InputMaybe<Team_Filter>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type GetarticlesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetarticlesQuery = { Article: Array<{ type?: string | null, video?: string | null, slug?: string | null, user_created?: { first_name?: string | null, last_name?: string | null } | null, translations?: Array<{ cover?: { id?: string | null, title?: string | null } | null } | null> | null, date_created_func?: { day?: number | null, month?: number | null, year?: number | null } | null }> };

export type BrandsQueryVariables = Exact<{ [key: string]: never; }>;


export type BrandsQuery = { homepage_translations: Array<{ brands_list?: Array<{ directus_files_id?: { id?: string | null } | null } | null> | null }> };

export type GetfoodQueryVariables = Exact<{ [key: string]: never; }>;


export type GetfoodQuery = { Article: Array<{ id?: string | null, slug?: string | null, type?: string | null, video?: string | null, press_link?: string | null, date_created?: any | null, category?: { id?: string | null, slug: string, translations?: Array<{ title?: string | null, cover?: { id?: string | null } | null } | null> | null, user_created?: { first_name?: string | null, last_name?: string | null } | null } | null }> };

export type PostersQueryVariables = Exact<{ [key: string]: never; }>;


export type PostersQuery = { posters?: { translations?: Array<{ normal2_title?: string | null, normal2_url?: string | null, normal_title?: string | null, normal_url?: string | null, wide2_title?: string | null, wide2_url?: string | null, wide_title?: string | null, wide_url?: string | null, normal2_cover?: { id?: string | null } | null, normal_cover?: { id?: string | null } | null, wide2_cover?: { id?: string | null } | null, wide_cover?: { id?: string | null } | null } | null> | null } | null };

export type PressesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type PressesQuery = { Article: Array<{ slug?: string | null, press_link?: string | null, type?: string | null, user_created?: { last_name?: string | null, first_name?: string | null } | null, translations?: Array<{ title?: string | null, cover?: { id?: string | null } | null } | null> | null, date_created_func?: { day?: number | null, year?: number | null, month?: number | null } | null }> };

export type ShowsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type ShowsQuery = { shows: Array<{ slug?: string | null, all_episodes_func?: { count?: number | null } | null, translations?: Array<{ description?: string | null, title?: string | null, cover?: { id?: string | null } | null } | null> | null }> };


export const GetarticlesDocument = gql`
    query getarticles($limit: Int) {
  Article(filter: {type: {_eq: "read"}}, limit: $limit) {
    type
    video
    slug
    user_created {
      first_name
      last_name
    }
    translations {
      cover {
        id
        title
      }
    }
    date_created_func {
      day
      month
      year
    }
  }
}
    `;
export const BrandsDocument = gql`
    query brands {
  homepage_translations {
    brands_list {
      directus_files_id {
        id
      }
    }
  }
}
    `;
export const GetfoodDocument = gql`
    query getfood {
  Article(limit: 8, filter: {type: {_eq: "food"}}) {
    id
    slug
    type
    video
    press_link
    date_created
    category {
      id
      slug
      translations {
        title
        cover {
          id
        }
      }
      user_created {
        first_name
        last_name
      }
    }
  }
}
    `;
export const PostersDocument = gql`
    query posters {
  posters {
    translations {
      normal2_cover {
        id
      }
      normal2_title
      normal2_url
      normal_cover {
        id
      }
      normal_title
      normal_url
      wide2_cover {
        id
      }
      wide2_title
      wide2_url
      wide_cover {
        id
      }
      wide_title
      wide_url
    }
  }
}
    `;
export const PressesDocument = gql`
    query presses($limit: Int) {
  Article(
    filter: {type: {_eq: "press"}, translations: {languages_code: {code: {_eq: "ar-EG"}}}}
    limit: $limit
  ) {
    slug
    press_link
    type
    user_created {
      last_name
      first_name
    }
    translations {
      title
      cover {
        id
      }
    }
    date_created_func {
      day
      year
      month
    }
  }
}
    `;
export const ShowsDocument = gql`
    query Shows($limit: Int) {
  shows(limit: $limit) {
    all_episodes_func {
      count
    }
    slug
    translations {
      description
      title
      cover {
        id
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getarticles(variables?: GetarticlesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetarticlesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetarticlesQuery>(GetarticlesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getarticles', 'query');
    },
    brands(variables?: BrandsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BrandsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BrandsQuery>(BrandsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'brands', 'query');
    },
    getfood(variables?: GetfoodQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetfoodQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetfoodQuery>(GetfoodDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getfood', 'query');
    },
    posters(variables?: PostersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PostersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PostersQuery>(PostersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'posters', 'query');
    },
    presses(variables?: PressesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PressesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PressesQuery>(PressesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'presses', 'query');
    },
    Shows(variables?: ShowsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ShowsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ShowsQuery>(ShowsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Shows', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;