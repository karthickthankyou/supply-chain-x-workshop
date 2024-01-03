import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any }
}

export type AuthOutput = {
  __typename?: 'AuthOutput'
  token: Scalars['String']['output']
  user: User
}

export enum AuthProviderType {
  Credentials = 'CREDENTIALS',
  Google = 'GOOGLE',
}

export type CreateDistributorInput = {
  uid: Scalars['String']['input']
}

export type CreateInventoryInput = {
  productId: Scalars['Int']['input']
  quantity: Scalars['Int']['input']
  warehouseId: Scalars['Int']['input']
}

export type CreateLocationInput = {
  address: Scalars['String']['input']
  latitude: Scalars['Float']['input']
  longitude: Scalars['Float']['input']
  warehouseId: Scalars['Int']['input']
}

export type CreateLocationInputWithoutWarehouseId = {
  address: Scalars['String']['input']
  latitude: Scalars['Float']['input']
  longitude: Scalars['Float']['input']
}

export type CreateManufacturerInput = {
  uid: Scalars['String']['input']
}

export type CreateProductInput = {
  description?: InputMaybe<Scalars['String']['input']>
  image?: InputMaybe<Scalars['String']['input']>
  manufacturerId: Scalars['String']['input']
  name: Scalars['String']['input']
}

export type CreateRetailerInput = {
  uid: Scalars['String']['input']
}

export type CreateTransactionInput = {
  fromWarehouseId?: InputMaybe<Scalars['Int']['input']>
  productId: Scalars['Int']['input']
  quantity: Scalars['Int']['input']
  toWarehouseId?: InputMaybe<Scalars['Int']['input']>
}

export type CreateWarehouseInput = {
  address: CreateLocationInputWithoutWarehouseId
  description?: InputMaybe<Scalars['String']['input']>
  distributorId?: InputMaybe<Scalars['String']['input']>
  manufacturerId?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  retailerId?: InputMaybe<Scalars['String']['input']>
}

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
}

export type Distributor = {
  __typename?: 'Distributor'
  createdAt: Scalars['DateTime']['output']
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  user: User
  warehouses: Array<Warehouse>
}

export type DistributorOrderByWithRelationInput = {
  Warehouses?: InputMaybe<WarehouseOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export type DistributorRelationFilter = {
  is?: InputMaybe<DistributorWhereInput>
  isNot?: InputMaybe<DistributorWhereInput>
}

export enum DistributorScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type DistributorWhereInput = {
  AND?: InputMaybe<Array<DistributorWhereInput>>
  NOT?: InputMaybe<Array<DistributorWhereInput>>
  OR?: InputMaybe<Array<DistributorWhereInput>>
  Warehouses?: InputMaybe<WarehouseListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type DistributorWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  not?: InputMaybe<Scalars['Int']['input']>
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
}

export type Inventory = {
  __typename?: 'Inventory'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  product: Product
  productId: Scalars['Int']['output']
  quantity: Scalars['Int']['output']
  updatedAt: Scalars['DateTime']['output']
  warehouse: Warehouse
  warehouseId: Scalars['Int']['output']
}

export type InventoryListRelationFilter = {
  every?: InputMaybe<InventoryWhereInput>
  none?: InputMaybe<InventoryWhereInput>
  some?: InputMaybe<InventoryWhereInput>
}

export type InventoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type InventoryOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  product?: InputMaybe<ProductOrderByWithRelationInput>
  productId?: InputMaybe<SortOrder>
  quantity?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  warehouse?: InputMaybe<WarehouseOrderByWithRelationInput>
  warehouseId?: InputMaybe<SortOrder>
}

export enum InventoryScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  ProductId = 'productId',
  Quantity = 'quantity',
  UpdatedAt = 'updatedAt',
  WarehouseId = 'warehouseId',
}

export type InventoryWhereInput = {
  AND?: InputMaybe<Array<InventoryWhereInput>>
  NOT?: InputMaybe<Array<InventoryWhereInput>>
  OR?: InputMaybe<Array<InventoryWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  product?: InputMaybe<ProductRelationFilter>
  productId?: InputMaybe<IntFilter>
  quantity?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  warehouse?: InputMaybe<WarehouseRelationFilter>
  warehouseId?: InputMaybe<IntFilter>
}

export type InventoryWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type Location = {
  __typename?: 'Location'
  address: Scalars['String']['output']
  id: Scalars['Int']['output']
  latitude: Scalars['Float']['output']
  longitude: Scalars['Float']['output']
  warehouse: Warehouse
  warehouseId: Scalars['Int']['output']
}

export type LocationOrderByWithRelationInput = {
  Warehouse?: InputMaybe<WarehouseOrderByWithRelationInput>
  address?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  latitude?: InputMaybe<SortOrder>
  longitude?: InputMaybe<SortOrder>
  warehouseId?: InputMaybe<SortOrder>
}

export type LocationRelationFilter = {
  is?: InputMaybe<LocationWhereInput>
  isNot?: InputMaybe<LocationWhereInput>
}

export enum LocationScalarFieldEnum {
  Address = 'address',
  Id = 'id',
  Latitude = 'latitude',
  Longitude = 'longitude',
  WarehouseId = 'warehouseId',
}

export type LocationWhereInput = {
  AND?: InputMaybe<Array<LocationWhereInput>>
  NOT?: InputMaybe<Array<LocationWhereInput>>
  OR?: InputMaybe<Array<LocationWhereInput>>
  Warehouse?: InputMaybe<WarehouseRelationFilter>
  address?: InputMaybe<StringFilter>
  id?: InputMaybe<IntFilter>
  latitude?: InputMaybe<FloatFilter>
  longitude?: InputMaybe<FloatFilter>
  warehouseId?: InputMaybe<IntFilter>
}

export type LocationWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type LoginInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type Manufacturer = {
  __typename?: 'Manufacturer'
  createdAt: Scalars['DateTime']['output']
  products: Array<Product>
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  user: User
  warehouses: Array<Warehouse>
}

export type ManufacturerOrderByWithRelationInput = {
  Products?: InputMaybe<ProductOrderByRelationAggregateInput>
  Warehouses?: InputMaybe<WarehouseOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export type ManufacturerRelationFilter = {
  is?: InputMaybe<ManufacturerWhereInput>
  isNot?: InputMaybe<ManufacturerWhereInput>
}

export enum ManufacturerScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type ManufacturerWhereInput = {
  AND?: InputMaybe<Array<ManufacturerWhereInput>>
  NOT?: InputMaybe<Array<ManufacturerWhereInput>>
  OR?: InputMaybe<Array<ManufacturerWhereInput>>
  Products?: InputMaybe<ProductListRelationFilter>
  Warehouses?: InputMaybe<WarehouseListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type ManufacturerWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type Mutation = {
  __typename?: 'Mutation'
  createDistributor: Distributor
  createInventory: Inventory
  createLocation: Location
  createManufacturer: Manufacturer
  createProduct: Product
  createRetailer: Retailer
  createTransaction: Transaction
  createWarehouse: Warehouse
  login: AuthOutput
  reduceInventory: Inventory
  registerWithCredentials: AuthOutput
  registerWithProvider: AuthOutput
  removeDistributor: Distributor
  removeInventory: Inventory
  removeLocation: Location
  removeManufacturer: Manufacturer
  removeProduct: Product
  removeRetailer: Retailer
  removeTransaction: Transaction
  removeUser: User
  removeWarehouse: Warehouse
  transferInventory: Inventory
  updateDistributor: Distributor
  updateInventory: Inventory
  updateLocation: Location
  updateManufacturer: Manufacturer
  updateProduct: Product
  updateRetailer: Retailer
  updateTransaction: Transaction
  updateUser: User
  updateWarehouse: Warehouse
}

export type MutationCreateDistributorArgs = {
  createDistributorInput: CreateDistributorInput
}

export type MutationCreateInventoryArgs = {
  createInventoryInput: CreateInventoryInput
}

export type MutationCreateLocationArgs = {
  createLocationInput: CreateLocationInput
}

export type MutationCreateManufacturerArgs = {
  createManufacturerInput: CreateManufacturerInput
}

export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput
}

export type MutationCreateRetailerArgs = {
  createRetailerInput: CreateRetailerInput
}

export type MutationCreateTransactionArgs = {
  createTransactionInput: CreateTransactionInput
}

export type MutationCreateWarehouseArgs = {
  createWarehouseInput: CreateWarehouseInput
}

export type MutationLoginArgs = {
  loginInput: LoginInput
}

export type MutationReduceInventoryArgs = {
  productId: Scalars['Int']['input']
  quantity: Scalars['Int']['input']
  warehouseId: Scalars['Int']['input']
}

export type MutationRegisterWithCredentialsArgs = {
  registerWithCredentialsInput: RegisterWithCredentialsInput
}

export type MutationRegisterWithProviderArgs = {
  registerWithProviderInput: RegisterWithProviderInput
}

export type MutationRemoveDistributorArgs = {
  where: DistributorWhereUniqueInput
}

export type MutationRemoveInventoryArgs = {
  where: InventoryWhereUniqueInput
}

export type MutationRemoveLocationArgs = {
  where: LocationWhereUniqueInput
}

export type MutationRemoveManufacturerArgs = {
  where: ManufacturerWhereUniqueInput
}

export type MutationRemoveProductArgs = {
  where: ProductWhereUniqueInput
}

export type MutationRemoveRetailerArgs = {
  where: RetailerWhereUniqueInput
}

export type MutationRemoveTransactionArgs = {
  where: TransactionWhereUniqueInput
}

export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput
}

export type MutationRemoveWarehouseArgs = {
  where: WarehouseWhereUniqueInput
}

export type MutationTransferInventoryArgs = {
  fromWarehouseId: Scalars['Int']['input']
  productId: Scalars['Int']['input']
  quantity: Scalars['Int']['input']
  toWarehouseId: Scalars['Int']['input']
}

export type MutationUpdateDistributorArgs = {
  updateDistributorInput: UpdateDistributorInput
}

export type MutationUpdateInventoryArgs = {
  updateInventoryInput: UpdateInventoryInput
}

export type MutationUpdateLocationArgs = {
  updateLocationInput: UpdateLocationInput
}

export type MutationUpdateManufacturerArgs = {
  updateManufacturerInput: UpdateManufacturerInput
}

export type MutationUpdateProductArgs = {
  updateProductInput: UpdateProductInput
}

export type MutationUpdateRetailerArgs = {
  updateRetailerInput: UpdateRetailerInput
}

export type MutationUpdateTransactionArgs = {
  updateTransactionInput: UpdateTransactionInput
}

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput
}

export type MutationUpdateWarehouseArgs = {
  updateWarehouseInput: UpdateWarehouseInput
}

export type Product = {
  __typename?: 'Product'
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  image?: Maybe<Scalars['String']['output']>
  inventories: Array<Inventory>
  manufacturer: Manufacturer
  manufacturerId: Scalars['String']['output']
  name: Scalars['String']['output']
  transactions: Array<Transaction>
  updatedAt: Scalars['DateTime']['output']
}

export type ProductListRelationFilter = {
  every?: InputMaybe<ProductWhereInput>
  none?: InputMaybe<ProductWhereInput>
  some?: InputMaybe<ProductWhereInput>
}

export type ProductOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ProductOrderByWithRelationInput = {
  Inventories?: InputMaybe<InventoryOrderByRelationAggregateInput>
  Manufacturer?: InputMaybe<ManufacturerOrderByWithRelationInput>
  Transactions?: InputMaybe<TransactionOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  image?: InputMaybe<SortOrder>
  manufacturerId?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type ProductRelationFilter = {
  is?: InputMaybe<ProductWhereInput>
  isNot?: InputMaybe<ProductWhereInput>
}

export enum ProductScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Image = 'image',
  ManufacturerId = 'manufacturerId',
  Name = 'name',
  UpdatedAt = 'updatedAt',
}

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>
  Inventories?: InputMaybe<InventoryListRelationFilter>
  Manufacturer?: InputMaybe<ManufacturerRelationFilter>
  NOT?: InputMaybe<Array<ProductWhereInput>>
  OR?: InputMaybe<Array<ProductWhereInput>>
  Transactions?: InputMaybe<TransactionListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  description?: InputMaybe<StringFilter>
  id?: InputMaybe<IntFilter>
  image?: InputMaybe<StringFilter>
  manufacturerId?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ProductWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type Query = {
  __typename?: 'Query'
  distributor: Distributor
  distributors: Array<Distributor>
  inventories: Array<Inventory>
  inventory: Inventory
  location: Location
  locations: Array<Location>
  manufacturer: Manufacturer
  manufacturers: Array<Manufacturer>
  myProducts: Array<Product>
  myWarehouses: Array<Warehouse>
  product: Product
  products: Array<Product>
  retailer: Retailer
  retailers: Array<Retailer>
  transaction: Transaction
  transactions: Array<Transaction>
  user: User
  users: Array<User>
  warehouse: Warehouse
  warehouses: Array<Warehouse>
}

export type QueryDistributorArgs = {
  where: DistributorWhereUniqueInput
}

export type QueryDistributorsArgs = {
  cursor?: InputMaybe<DistributorWhereUniqueInput>
  distinct?: InputMaybe<Array<DistributorScalarFieldEnum>>
  orderBy?: InputMaybe<Array<DistributorOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<DistributorWhereInput>
}

export type QueryInventoriesArgs = {
  cursor?: InputMaybe<InventoryWhereUniqueInput>
  distinct?: InputMaybe<Array<InventoryScalarFieldEnum>>
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<InventoryWhereInput>
}

export type QueryInventoryArgs = {
  where: InventoryWhereUniqueInput
}

export type QueryLocationArgs = {
  where: LocationWhereUniqueInput
}

export type QueryLocationsArgs = {
  cursor?: InputMaybe<LocationWhereUniqueInput>
  distinct?: InputMaybe<Array<LocationScalarFieldEnum>>
  orderBy?: InputMaybe<Array<LocationOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<LocationWhereInput>
}

export type QueryManufacturerArgs = {
  where: ManufacturerWhereUniqueInput
}

export type QueryManufacturersArgs = {
  cursor?: InputMaybe<ManufacturerWhereUniqueInput>
  distinct?: InputMaybe<Array<ManufacturerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ManufacturerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ManufacturerWhereInput>
}

export type QueryMyProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ProductWhereInput>
}

export type QueryMyWarehousesArgs = {
  cursor?: InputMaybe<WarehouseWhereUniqueInput>
  distinct?: InputMaybe<Array<WarehouseScalarFieldEnum>>
  orderBy?: InputMaybe<Array<WarehouseOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<WarehouseWhereInput>
}

export type QueryProductArgs = {
  where: ProductWhereUniqueInput
}

export type QueryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ProductWhereInput>
}

export type QueryRetailerArgs = {
  where: RetailerWhereUniqueInput
}

export type QueryRetailersArgs = {
  cursor?: InputMaybe<RetailerWhereUniqueInput>
  distinct?: InputMaybe<Array<RetailerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<RetailerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RetailerWhereInput>
}

export type QueryTransactionArgs = {
  where: TransactionWhereUniqueInput
}

export type QueryTransactionsArgs = {
  cursor?: InputMaybe<TransactionWhereUniqueInput>
  distinct?: InputMaybe<Array<TransactionScalarFieldEnum>>
  orderBy?: InputMaybe<Array<TransactionOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<TransactionWhereInput>
}

export type QueryUserArgs = {
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserWhereInput>
}

export type QueryWarehouseArgs = {
  where: WarehouseWhereUniqueInput
}

export type QueryWarehousesArgs = {
  cursor?: InputMaybe<WarehouseWhereUniqueInput>
  distinct?: InputMaybe<Array<WarehouseScalarFieldEnum>>
  orderBy?: InputMaybe<Array<WarehouseOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<WarehouseWhereInput>
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type RegisterWithCredentialsInput = {
  email: Scalars['String']['input']
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  password: Scalars['String']['input']
}

export type RegisterWithProviderInput = {
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  type: AuthProviderType
  uid: Scalars['String']['input']
}

export type Retailer = {
  __typename?: 'Retailer'
  createdAt: Scalars['DateTime']['output']
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  user: User
  warehouses: Array<Warehouse>
}

export type RetailerOrderByWithRelationInput = {
  Warehouses?: InputMaybe<WarehouseOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export type RetailerRelationFilter = {
  is?: InputMaybe<RetailerWhereInput>
  isNot?: InputMaybe<RetailerWhereInput>
}

export enum RetailerScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type RetailerWhereInput = {
  AND?: InputMaybe<Array<RetailerWhereInput>>
  NOT?: InputMaybe<Array<RetailerWhereInput>>
  OR?: InputMaybe<Array<RetailerWhereInput>>
  Warehouses?: InputMaybe<WarehouseListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type RetailerWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type Transaction = {
  __typename?: 'Transaction'
  createdAt: Scalars['DateTime']['output']
  fromWarehouse?: Maybe<Warehouse>
  fromWarehouseId?: Maybe<Scalars['Int']['output']>
  id: Scalars['Int']['output']
  product: Product
  productId: Scalars['Int']['output']
  quantity: Scalars['Int']['output']
  toWarehouse?: Maybe<Warehouse>
  toWarehouseId?: Maybe<Scalars['Int']['output']>
  updatedAt: Scalars['DateTime']['output']
}

export type TransactionListRelationFilter = {
  every?: InputMaybe<TransactionWhereInput>
  none?: InputMaybe<TransactionWhereInput>
  some?: InputMaybe<TransactionWhereInput>
}

export type TransactionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type TransactionOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  fromWarehouse?: InputMaybe<WarehouseOrderByWithRelationInput>
  fromWarehouseId?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  product?: InputMaybe<ProductOrderByWithRelationInput>
  productId?: InputMaybe<SortOrder>
  quantity?: InputMaybe<SortOrder>
  toWarehouse?: InputMaybe<WarehouseOrderByWithRelationInput>
  toWarehouseId?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum TransactionScalarFieldEnum {
  CreatedAt = 'createdAt',
  FromWarehouseId = 'fromWarehouseId',
  Id = 'id',
  ProductId = 'productId',
  Quantity = 'quantity',
  ToWarehouseId = 'toWarehouseId',
  UpdatedAt = 'updatedAt',
}

export type TransactionWhereInput = {
  AND?: InputMaybe<Array<TransactionWhereInput>>
  NOT?: InputMaybe<Array<TransactionWhereInput>>
  OR?: InputMaybe<Array<TransactionWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  fromWarehouse?: InputMaybe<WarehouseRelationFilter>
  fromWarehouseId?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  product?: InputMaybe<ProductRelationFilter>
  productId?: InputMaybe<IntFilter>
  quantity?: InputMaybe<IntFilter>
  toWarehouse?: InputMaybe<WarehouseRelationFilter>
  toWarehouseId?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type TransactionWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type UpdateDistributorInput = {
  uid: Scalars['String']['input']
}

export type UpdateInventoryInput = {
  id: Scalars['Int']['input']
  productId?: InputMaybe<Scalars['Int']['input']>
  quantity?: InputMaybe<Scalars['Int']['input']>
  warehouseId?: InputMaybe<Scalars['Int']['input']>
}

export type UpdateLocationInput = {
  address?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  latitude?: InputMaybe<Scalars['Float']['input']>
  longitude?: InputMaybe<Scalars['Float']['input']>
  warehouseId?: InputMaybe<Scalars['Int']['input']>
}

export type UpdateManufacturerInput = {
  uid: Scalars['String']['input']
}

export type UpdateProductInput = {
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  image?: InputMaybe<Scalars['String']['input']>
  manufacturerId?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type UpdateRetailerInput = {
  uid: Scalars['String']['input']
}

export type UpdateTransactionInput = {
  fromWarehouseId?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['Int']['input']
  productId?: InputMaybe<Scalars['Int']['input']>
  quantity?: InputMaybe<Scalars['Int']['input']>
  toWarehouseId?: InputMaybe<Scalars['Int']['input']>
}

export type UpdateUserInput = {
  uid: Scalars['String']['input']
}

export type UpdateWarehouseInput = {
  address?: InputMaybe<CreateLocationInputWithoutWarehouseId>
  description?: InputMaybe<Scalars['String']['input']>
  distributorId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  manufacturerId?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  retailerId?: InputMaybe<Scalars['String']['input']>
}

export type User = {
  __typename?: 'User'
  createdAt: Scalars['DateTime']['output']
  email: Scalars['String']['output']
  image?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type UserOrderByWithRelationInput = {
  Distributor?: InputMaybe<DistributorOrderByWithRelationInput>
  Manufacturer?: InputMaybe<ManufacturerOrderByWithRelationInput>
  Retailer?: InputMaybe<RetailerOrderByWithRelationInput>
  createdAt?: InputMaybe<SortOrder>
  image?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>
  isNot?: InputMaybe<UserWhereInput>
}

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Image = 'image',
  Name = 'name',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>
  Distributor?: InputMaybe<DistributorRelationFilter>
  Manufacturer?: InputMaybe<ManufacturerRelationFilter>
  NOT?: InputMaybe<Array<UserWhereInput>>
  OR?: InputMaybe<Array<UserWhereInput>>
  Retailer?: InputMaybe<RetailerRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  name?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type UserWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type Warehouse = {
  __typename?: 'Warehouse'
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  distributor?: Maybe<Distributor>
  distributorId?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  ins: Array<Transaction>
  inventories: Array<Inventory>
  location?: Maybe<Location>
  manufacturer?: Maybe<Manufacturer>
  manufacturerId?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  outs: Array<Transaction>
  retailer?: Maybe<Retailer>
  retailerId?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['DateTime']['output']
}

export type WarehouseListRelationFilter = {
  every?: InputMaybe<WarehouseWhereInput>
  none?: InputMaybe<WarehouseWhereInput>
  some?: InputMaybe<WarehouseWhereInput>
}

export type WarehouseOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type WarehouseOrderByWithRelationInput = {
  Distributor?: InputMaybe<DistributorOrderByWithRelationInput>
  Inventories?: InputMaybe<InventoryOrderByRelationAggregateInput>
  Manufacturer?: InputMaybe<ManufacturerOrderByWithRelationInput>
  Retailer?: InputMaybe<RetailerOrderByWithRelationInput>
  createdAt?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  distributorId?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  ins?: InputMaybe<TransactionOrderByRelationAggregateInput>
  location?: InputMaybe<LocationOrderByWithRelationInput>
  manufacturerId?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  outs?: InputMaybe<TransactionOrderByRelationAggregateInput>
  retailerId?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type WarehouseRelationFilter = {
  is?: InputMaybe<WarehouseWhereInput>
  isNot?: InputMaybe<WarehouseWhereInput>
}

export enum WarehouseScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  DistributorId = 'distributorId',
  Id = 'id',
  ManufacturerId = 'manufacturerId',
  Name = 'name',
  RetailerId = 'retailerId',
  UpdatedAt = 'updatedAt',
}

export type WarehouseWhereInput = {
  AND?: InputMaybe<Array<WarehouseWhereInput>>
  Distributor?: InputMaybe<DistributorRelationFilter>
  Inventories?: InputMaybe<InventoryListRelationFilter>
  Manufacturer?: InputMaybe<ManufacturerRelationFilter>
  NOT?: InputMaybe<Array<WarehouseWhereInput>>
  OR?: InputMaybe<Array<WarehouseWhereInput>>
  Retailer?: InputMaybe<RetailerRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  description?: InputMaybe<StringFilter>
  distributorId?: InputMaybe<StringFilter>
  id?: InputMaybe<IntFilter>
  ins?: InputMaybe<TransactionListRelationFilter>
  location?: InputMaybe<LocationRelationFilter>
  manufacturerId?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  outs?: InputMaybe<TransactionListRelationFilter>
  retailerId?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type WarehouseWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login: {
    __typename?: 'AuthOutput'
    token: string
    user: {
      __typename?: 'User'
      updatedAt: any
      uid: string
      name?: string | null
      image?: string | null
      createdAt: any
      email: string
    }
  }
}

export type UserQueryVariables = Exact<{
  where: UserWhereUniqueInput
}>

export type UserQuery = {
  __typename?: 'Query'
  user: {
    __typename?: 'User'
    uid: string
    name?: string | null
    email: string
  }
}

export type RegisterWithProviderMutationVariables = Exact<{
  registerWithProviderInput: RegisterWithProviderInput
}>

export type RegisterWithProviderMutation = {
  __typename?: 'Mutation'
  registerWithProvider: {
    __typename?: 'AuthOutput'
    token: string
    user: {
      __typename?: 'User'
      updatedAt: any
      uid: string
      name?: string | null
      image?: string | null
      email: string
      createdAt: any
    }
  }
}

export type RegisterWithCredentialsMutationVariables = Exact<{
  registerWithCredentialsInput: RegisterWithCredentialsInput
}>

export type RegisterWithCredentialsMutation = {
  __typename?: 'Mutation'
  registerWithCredentials: {
    __typename?: 'AuthOutput'
    token: string
    user: {
      __typename?: 'User'
      uid: string
      name?: string | null
      image?: string | null
      createdAt: any
      updatedAt: any
    }
  }
}

export type ManufacturerQueryVariables = Exact<{
  where: ManufacturerWhereUniqueInput
}>

export type ManufacturerQuery = {
  __typename?: 'Query'
  manufacturer: {
    __typename?: 'Manufacturer'
    uid: string
    createdAt: any
    user: { __typename?: 'User'; image?: string | null; name?: string | null }
    warehouses: Array<{ __typename?: 'Warehouse'; name: string; id: number }>
    products: Array<{ __typename?: 'Product'; name: string; id: number }>
  }
}

export type DistributorQueryVariables = Exact<{
  where: DistributorWhereUniqueInput
}>

export type DistributorQuery = {
  __typename?: 'Query'
  distributor: {
    __typename?: 'Distributor'
    uid: string
    createdAt: any
    user: { __typename?: 'User'; image?: string | null; name?: string | null }
    warehouses: Array<{ __typename?: 'Warehouse'; name: string; id: number }>
  }
}

export type RetailerQueryVariables = Exact<{
  where: RetailerWhereUniqueInput
}>

export type RetailerQuery = {
  __typename?: 'Query'
  retailer: {
    __typename?: 'Retailer'
    uid: string
    createdAt: any
    user: { __typename?: 'User'; image?: string | null; name?: string | null }
    warehouses: Array<{ __typename?: 'Warehouse'; name: string; id: number }>
  }
}

export type CreateManufacturerMutationVariables = Exact<{
  createManufacturerInput: CreateManufacturerInput
}>

export type CreateManufacturerMutation = {
  __typename?: 'Mutation'
  createManufacturer: { __typename?: 'Manufacturer'; uid: string }
}

export type TransactionDetailsFragment = {
  __typename?: 'Transaction'
  id: number
  quantity: number
  createdAt: any
  toWarehouse?: { __typename?: 'Warehouse'; name: string; id: number } | null
  fromWarehouse?: { __typename?: 'Warehouse'; name: string; id: number } | null
  product: {
    __typename?: 'Product'
    name: string
    image?: string | null
    id: number
  }
}

export type WarehouseDetailsFragment = {
  __typename?: 'Warehouse'
  id: number
  name: string
  description?: string | null
  createdAt: any
  location?: {
    __typename?: 'Location'
    address: string
    latitude: number
    longitude: number
  } | null
  ins: Array<{
    __typename?: 'Transaction'
    id: number
    quantity: number
    createdAt: any
    toWarehouse?: { __typename?: 'Warehouse'; name: string; id: number } | null
    fromWarehouse?: {
      __typename?: 'Warehouse'
      name: string
      id: number
    } | null
    product: {
      __typename?: 'Product'
      name: string
      image?: string | null
      id: number
    }
  }>
  outs: Array<{
    __typename?: 'Transaction'
    id: number
    quantity: number
    createdAt: any
    toWarehouse?: { __typename?: 'Warehouse'; name: string; id: number } | null
    fromWarehouse?: {
      __typename?: 'Warehouse'
      name: string
      id: number
    } | null
    product: {
      __typename?: 'Product'
      name: string
      image?: string | null
      id: number
    }
  }>
  inventories: Array<{
    __typename?: 'Inventory'
    quantity: number
    product: {
      __typename?: 'Product'
      name: string
      image?: string | null
      id: number
    }
  }>
}

export type MyWarehousesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<
    Array<WarehouseOrderByWithRelationInput> | WarehouseOrderByWithRelationInput
  >
  where?: InputMaybe<WarehouseWhereInput>
}>

export type MyWarehousesQuery = {
  __typename?: 'Query'
  myWarehouses: Array<{
    __typename?: 'Warehouse'
    id: number
    name: string
    description?: string | null
    createdAt: any
    location?: {
      __typename?: 'Location'
      address: string
      latitude: number
      longitude: number
    } | null
    ins: Array<{
      __typename?: 'Transaction'
      id: number
      quantity: number
      createdAt: any
      toWarehouse?: {
        __typename?: 'Warehouse'
        name: string
        id: number
      } | null
      fromWarehouse?: {
        __typename?: 'Warehouse'
        name: string
        id: number
      } | null
      product: {
        __typename?: 'Product'
        name: string
        image?: string | null
        id: number
      }
    }>
    outs: Array<{
      __typename?: 'Transaction'
      id: number
      quantity: number
      createdAt: any
      toWarehouse?: {
        __typename?: 'Warehouse'
        name: string
        id: number
      } | null
      fromWarehouse?: {
        __typename?: 'Warehouse'
        name: string
        id: number
      } | null
      product: {
        __typename?: 'Product'
        name: string
        image?: string | null
        id: number
      }
    }>
    inventories: Array<{
      __typename?: 'Inventory'
      quantity: number
      product: {
        __typename?: 'Product'
        name: string
        image?: string | null
        id: number
      }
    }>
  }>
}

export type WarehouseQueryVariables = Exact<{
  where: WarehouseWhereUniqueInput
}>

export type WarehouseQuery = {
  __typename?: 'Query'
  warehouse: {
    __typename?: 'Warehouse'
    id: number
    name: string
    description?: string | null
    createdAt: any
    location?: {
      __typename?: 'Location'
      address: string
      latitude: number
      longitude: number
    } | null
    ins: Array<{
      __typename?: 'Transaction'
      id: number
      quantity: number
      createdAt: any
      toWarehouse?: {
        __typename?: 'Warehouse'
        name: string
        id: number
      } | null
      fromWarehouse?: {
        __typename?: 'Warehouse'
        name: string
        id: number
      } | null
      product: {
        __typename?: 'Product'
        name: string
        image?: string | null
        id: number
      }
    }>
    outs: Array<{
      __typename?: 'Transaction'
      id: number
      quantity: number
      createdAt: any
      toWarehouse?: {
        __typename?: 'Warehouse'
        name: string
        id: number
      } | null
      fromWarehouse?: {
        __typename?: 'Warehouse'
        name: string
        id: number
      } | null
      product: {
        __typename?: 'Product'
        name: string
        image?: string | null
        id: number
      }
    }>
    inventories: Array<{
      __typename?: 'Inventory'
      quantity: number
      product: {
        __typename?: 'Product'
        name: string
        image?: string | null
        id: number
      }
    }>
  }
}

export type CreateWarehouseMutationVariables = Exact<{
  createWarehouseInput: CreateWarehouseInput
}>

export type CreateWarehouseMutation = {
  __typename?: 'Mutation'
  createWarehouse: { __typename?: 'Warehouse'; id: number }
}

export type MyProductsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<
    Array<ProductOrderByWithRelationInput> | ProductOrderByWithRelationInput
  >
  where?: InputMaybe<ProductWhereInput>
}>

export type MyProductsQuery = {
  __typename?: 'Query'
  myProducts: Array<{
    __typename?: 'Product'
    id: number
    name: string
    image?: string | null
    createdAt: any
    description?: string | null
  }>
}

export type CreateProductMutationVariables = Exact<{
  createProductInput: CreateProductInput
}>

export type CreateProductMutation = {
  __typename?: 'Mutation'
  createProduct: { __typename?: 'Product'; id: number }
}

export type ProductQueryVariables = Exact<{
  where: ProductWhereUniqueInput
}>

export type ProductQuery = {
  __typename?: 'Query'
  product: {
    __typename?: 'Product'
    name: string
    description?: string | null
    createdAt: any
    transactions: Array<{
      __typename?: 'Transaction'
      id: number
      quantity: number
      toWarehouse?: {
        __typename?: 'Warehouse'
        id: number
        location?: {
          __typename?: 'Location'
          latitude: number
          longitude: number
          id: number
        } | null
      } | null
      fromWarehouse?: {
        __typename?: 'Warehouse'
        id: number
        location?: {
          __typename?: 'Location'
          latitude: number
          longitude: number
          id: number
        } | null
      } | null
    }>
    inventories: Array<{
      __typename?: 'Inventory'
      id: number
      quantity: number
      warehouse: {
        __typename?: 'Warehouse'
        manufacturer?: { __typename?: 'Manufacturer'; uid: string } | null
        distributor?: { __typename?: 'Distributor'; uid: string } | null
        retailer?: { __typename?: 'Retailer'; uid: string } | null
        location?: {
          __typename?: 'Location'
          latitude: number
          longitude: number
          id: number
        } | null
      }
    }>
  }
}

export type CreateInventoryMutationVariables = Exact<{
  createInventoryInput: CreateInventoryInput
}>

export type CreateInventoryMutation = {
  __typename?: 'Mutation'
  createInventory: { __typename?: 'Inventory'; id: number }
}

export type TransferInventoryMutationVariables = Exact<{
  fromWarehouseId: Scalars['Int']['input']
  toWarehouseId: Scalars['Int']['input']
  productId: Scalars['Int']['input']
  quantity: Scalars['Int']['input']
}>

export type TransferInventoryMutation = {
  __typename?: 'Mutation'
  transferInventory: { __typename?: 'Inventory'; id: number }
}

export type ReduceInventoryMutationVariables = Exact<{
  warehouseId: Scalars['Int']['input']
  productId: Scalars['Int']['input']
  quantity: Scalars['Int']['input']
}>

export type ReduceInventoryMutation = {
  __typename?: 'Mutation'
  reduceInventory: { __typename?: 'Inventory'; id: number }
}

export type CreateDistributorMutationVariables = Exact<{
  createDistributorInput: CreateDistributorInput
}>

export type CreateDistributorMutation = {
  __typename?: 'Mutation'
  createDistributor: { __typename?: 'Distributor'; uid: string }
}

export type CreateRetailerMutationVariables = Exact<{
  createRetailerInput: CreateRetailerInput
}>

export type CreateRetailerMutation = {
  __typename?: 'Mutation'
  createRetailer: { __typename?: 'Retailer'; uid: string }
}

export const namedOperations = {
  Query: {
    user: 'user',
    Manufacturer: 'Manufacturer',
    distributor: 'distributor',
    retailer: 'retailer',
    myWarehouses: 'myWarehouses',
    warehouse: 'warehouse',
    myProducts: 'myProducts',
    product: 'product',
  },
  Mutation: {
    Login: 'Login',
    registerWithProvider: 'registerWithProvider',
    registerWithCredentials: 'registerWithCredentials',
    createManufacturer: 'createManufacturer',
    createWarehouse: 'createWarehouse',
    createProduct: 'createProduct',
    createInventory: 'createInventory',
    transferInventory: 'transferInventory',
    reduceInventory: 'reduceInventory',
    createDistributor: 'createDistributor',
    createRetailer: 'createRetailer',
  },
  Fragment: {
    TransactionDetails: 'TransactionDetails',
    WarehouseDetails: 'WarehouseDetails',
  },
}
export const TransactionDetailsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TransactionDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Transaction' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'toWarehouse' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fromWarehouse' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'product' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TransactionDetailsFragment, unknown>
export const WarehouseDetailsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'WarehouseDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Warehouse' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ins' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'TransactionDetails' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'outs' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'TransactionDetails' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'inventories' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'product' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TransactionDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Transaction' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'toWarehouse' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fromWarehouse' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'product' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<WarehouseDetailsFragment, unknown>
export const LoginDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Login' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'loginInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'LoginInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'login' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'loginInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'loginInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'token' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>
export const UserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'user' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UserWhereUniqueInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserQuery, UserQueryVariables>
export const RegisterWithProviderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'registerWithProvider' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'registerWithProviderInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'RegisterWithProviderInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'registerWithProvider' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'registerWithProviderInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'registerWithProviderInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'token' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RegisterWithProviderMutation,
  RegisterWithProviderMutationVariables
>
export const RegisterWithCredentialsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'registerWithCredentials' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'registerWithCredentialsInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'RegisterWithCredentialsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'registerWithCredentials' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'registerWithCredentialsInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'registerWithCredentialsInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'token' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RegisterWithCredentialsMutation,
  RegisterWithCredentialsMutationVariables
>
export const ManufacturerDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Manufacturer' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ManufacturerWhereUniqueInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'manufacturer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'warehouses' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'products' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ManufacturerQuery, ManufacturerQueryVariables>
export const DistributorDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'distributor' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DistributorWhereUniqueInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'distributor' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'warehouses' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DistributorQuery, DistributorQueryVariables>
export const RetailerDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'retailer' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'RetailerWhereUniqueInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'retailer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'warehouses' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RetailerQuery, RetailerQueryVariables>
export const CreateManufacturerDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createManufacturer' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createManufacturerInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateManufacturerInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createManufacturer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createManufacturerInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createManufacturerInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateManufacturerMutation,
  CreateManufacturerMutationVariables
>
export const MyWarehousesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'myWarehouses' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'WarehouseOrderByWithRelationInput',
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'WarehouseWhereInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'myWarehouses' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'WarehouseDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TransactionDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Transaction' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'toWarehouse' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fromWarehouse' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'product' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'WarehouseDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Warehouse' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ins' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'TransactionDetails' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'outs' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'TransactionDetails' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'inventories' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'product' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MyWarehousesQuery, MyWarehousesQueryVariables>
export const WarehouseDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'warehouse' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'WarehouseWhereUniqueInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'warehouse' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'WarehouseDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TransactionDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Transaction' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'toWarehouse' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fromWarehouse' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'product' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'WarehouseDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Warehouse' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ins' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'TransactionDetails' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'outs' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'TransactionDetails' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'inventories' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'product' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<WarehouseQuery, WarehouseQueryVariables>
export const CreateWarehouseDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createWarehouse' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createWarehouseInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateWarehouseInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createWarehouse' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createWarehouseInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createWarehouseInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateWarehouseMutation,
  CreateWarehouseMutationVariables
>
export const MyProductsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'myProducts' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ProductOrderByWithRelationInput',
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ProductWhereInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'myProducts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MyProductsQuery, MyProductsQueryVariables>
export const CreateProductDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createProduct' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createProductInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateProductInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createProduct' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createProductInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createProductInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateProductMutation,
  CreateProductMutationVariables
>
export const ProductDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'product' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ProductWhereUniqueInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'product' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'transactions' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'quantity' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'toWarehouse' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'location' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'latitude' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'longitude' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'fromWarehouse' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'location' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'latitude' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'longitude' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'inventories' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'warehouse' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'manufacturer' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'uid' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'distributor' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'uid' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'retailer' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'uid' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'location' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'latitude' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'longitude' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'quantity' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProductQuery, ProductQueryVariables>
export const CreateInventoryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createInventory' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createInventoryInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateInventoryInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createInventory' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createInventoryInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createInventoryInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateInventoryMutation,
  CreateInventoryMutationVariables
>
export const TransferInventoryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'transferInventory' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'fromWarehouseId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'toWarehouseId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'productId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'quantity' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'transferInventory' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'fromWarehouseId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'fromWarehouseId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'toWarehouseId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'toWarehouseId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'productId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'productId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'quantity' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'quantity' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  TransferInventoryMutation,
  TransferInventoryMutationVariables
>
export const ReduceInventoryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'reduceInventory' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'warehouseId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'productId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'quantity' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'reduceInventory' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'warehouseId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'warehouseId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'productId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'productId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'quantity' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'quantity' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ReduceInventoryMutation,
  ReduceInventoryMutationVariables
>
export const CreateDistributorDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createDistributor' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createDistributorInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateDistributorInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createDistributor' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createDistributorInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createDistributorInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateDistributorMutation,
  CreateDistributorMutationVariables
>
export const CreateRetailerDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createRetailer' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createRetailerInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateRetailerInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createRetailer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createRetailerInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createRetailerInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateRetailerMutation,
  CreateRetailerMutationVariables
>
