import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { products } from '../../data/productData';

const Products = () => {
	return (
		<div>
			<section>
				<div className='container py-4'>
					{/* search box */}
					<form action=''>
						<div className='flex items-center flex-wrap'>
							<div className='flex items-center bg-gray-100 px-4 py-2 rounded-md w-full mb-4'>
								<div>
									<FiSearch color='#000' />
								</div>
								<div className='flex-1'>
									<input
										type='text'
										placeholder='Quick Search'
										name=''
										id=''
										className='w-full bg-transparent px-4 py-2 text-base focus:outline-none'
									/>
								</div>
							</div>
							<div className='w-1/2 pr-2'>
								<select
									name=''
									id=''
									className='w-full px-3 py-4 bg-gray1200 outline-none rounded-md'
								>
									<option value=''>All</option>
									<option value=''>Published</option>
									<option value=''>Inactive</option>
								</select>
							</div>
							<div className='w-1/2 pl-2'>
								<button className='w-full px-4 py-3.5 bg-blue-600 text-white rounded-md border-none'>
									Add Products
								</button>
							</div>
						</div>
					</form>

					<div className='mt-5'>
						<div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
							<div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
								<div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
									<table className='min-w-full divide-y divide-gray-300'>
										<thead className='bg-gray-50'>
											<tr>
												<th
													scope='col'
													className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
												>
													Product
												</th>
												<th
													scope='col'
													className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
												>
													SKU
												</th>
												<th
													scope='col'
													className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
												>
													QTY
												</th>
												<th
													scope='col'
													className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
												>
													PRICE
												</th>

												<th
													scope='col'
													className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
												>
													Rating
												</th>
												<th
													scope='col'
													className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
												>
													Status
												</th>
												<th
													scope='col'
													className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
												>
													ACTIONS
												</th>
											</tr>
										</thead>
										<tbody className='divide-y divide-gray-200 bg-white'>
											{products.map((product, index) => (
												<tr key={index}>
													<td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
														{product.name}
													</td>
													<td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
														{product.sku}
													</td>
													<td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
														{product.qty}
													</td>
													<td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
														{product.price}
													</td>
													<td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
														{product.rating}
													</td>
													<td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
														{product.status}
													</td>
													<td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
														<a
															href='#'
															className='text-indigo-600 hover:text-indigo-900'
														>
															Edit
															<span className='sr-only'>, {product.name}</span>
														</a>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Products;
