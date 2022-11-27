import { getSdk as defaultGqlSdk } from '#gql/default'
export { Article_Filter, Article_Translations_Filter, Career_Filter, Career_Translations_Filter, About_Filter, About_Translations_Filter, Category_Filter, Category_Translations_Filter, Count_Function_Filter_Operators, Create_Contact_Input, Date_Filter_Operators, Datetime_Function_Filter_Operators, Datetime_FunctionsInput, Directus_Files_Filter, Directus_Users_Filter, Homepage_Filter, Homepage_Translations_Files_1_Filter, Homepage_Translations_Files_Filter, Homepage_Translations_Filter, Languages_Filter, Number_Filter_Operators, Pages_Filter, Pages_Translations_Filter, Posters_Filter, Posters_Translations_Filter, Shows_Filter, Shows_Translations_Filter, String_Filter_Operators, Team_Filter, Team_Translations_Filter, GetarticlesQueryVariables, GetarticlesQuery, BrandsQueryVariables, BrandsQuery, GetfoodQueryVariables, GetfoodQuery, PostersQueryVariables, PostersQuery, PressesQueryVariables, PressesQuery, ShowsQueryVariables, ShowsQuery } from "#gql/default";
declare module '#gql' {
  type GqlClients = 'default'
  type GqlOps = 'getarticles' | 'getfood' | 'posters' | 'presses' | 'Shows' | 'MyQuery' | 'brands'
  const GqClientOps = {"default":["getarticles","getfood","posters","presses","Shows","MyQuery","brands"]}
  const GqlSdks = {
    default: defaultGqlSdk,
  }
  export const GqlShows: (...params: Parameters<GqlSdkFuncs['Shows']>) => ReturnType<GqlSdkFuncs['Shows']>
  export const GqlBrands: (...params: Parameters<GqlSdkFuncs['brands']>) => ReturnType<GqlSdkFuncs['brands']>
  export const GqlGetarticles: (...params: Parameters<GqlSdkFuncs['getarticles']>) => ReturnType<GqlSdkFuncs['getarticles']>
  export const GqlGetfood: (...params: Parameters<GqlSdkFuncs['getfood']>) => ReturnType<GqlSdkFuncs['getfood']>
  export const GqlPosters: (...params: Parameters<GqlSdkFuncs['posters']>) => ReturnType<GqlSdkFuncs['posters']>
  export const GqlPresses: (...params: Parameters<GqlSdkFuncs['presses']>) => ReturnType<GqlSdkFuncs['presses']>
  type GqlSdkFuncs = ReturnType<typeof defaultGqlSdk>
}