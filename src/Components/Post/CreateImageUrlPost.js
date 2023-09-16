import React, { useState } from 'react'

const CreateImageUrlPost = ({ onClose, onSubmit }) => {

    const [inputText, setInputText] = useState("");

    const handleSubmit = () => {
        onSubmit(inputText);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 w-96 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">🔗 Bağlantı Adresini Giriniz:</h2>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="https://........................................."
                    className="w-full p-2 border rounded-md mb-4"
                />
                <div className="flex justify-end">
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Tamam
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-300 text-gray-700 ml-2 px-4 py-2 rounded-md hover:bg-gray-400"
                    >
                        İptal
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateImageUrlPost