import React, { useState } from 'react'
import { categories, assets } from '../../assets/assets';

const AddProduct = () => {

    const [files, setFiles] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [offerPrice, setOfferPrice] = useState('');

    const onSubmitHandle = async (event) => {
        event.preventDefault();

        // temporary debug (later replace with API call)
        console.log({
            name,
            description,
            category,
            price,
            offerPrice,
            files
        });
    }

    return (
        <div className="no-scrollbar flex-1 h-[96vh] overflow-y-scroll flex flex-col justify-between">

            <form onSubmit={onSubmitHandle} className="md:p-10 p-4 space-y-5 max-w-lg">

                {/* Product Images */}
                <div>
                    <p className="text-base font-medium">Product Image</p>

                    <div className="flex flex-wrap items-center gap-3 mt-2">

                        {Array(4).fill('').map((_, index) => (
                            <label key={index} htmlFor={`image${index}`}>
                                <input
                                    type="file"
                                    id={`image${index}`}
                                    hidden
                                    onChange={(e) => {
                                        const updatedFiles = [...files];
                                        updatedFiles[index] = e.target.files[0];
                                        setFiles(updatedFiles);
                                    }}
                                />

                                <img
                                    className="max-w-24 cursor-pointer"
                                    src={
                                        files[index]
                                            ? URL.createObjectURL(files[index])
                                            : assets.upload_area
                                    }
                                    alt="upload"
                                />
                            </label>
                        ))}

                    </div>
                </div>

                {/* Product Name */}
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium">Product Name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Type here"
                        className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                        required
                    />
                </div>

                {/* Description */}
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium">Product Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}
                        placeholder="Type here"
                        className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
                    />
                </div>

                {/* Category */}
                <div className="w-full flex flex-col gap-1">
                    <label className="text-base font-medium">Category</label>

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                    >
                        <option value="">Select Category</option>

                        {categories.map((item, index) => (
                            <option key={index} value={item.path}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Price */}
                <div className="flex items-center gap-5 flex-wrap">

                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium">Product Price</label>
                        <input
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            type="number"
                            placeholder="0"
                            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                            required
                        />
                    </div>

                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium">Offer Price</label>
                        <input
                            value={offerPrice}
                            onChange={(e) => setOfferPrice(e.target.value)}
                            type="number"
                            placeholder="0"
                            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                            required
                        />
                    </div>

                </div>
                <button
                    type="submit"
                    className="px-8 py-2.5 bg-primary text-white font-medium rounded cursor-pointer"
                >
                    ADD
                </button>

            </form>
        </div>
    )
}

export default AddProduct