import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { formatSize } from '~/lib/utils';

interface FileUploaderProps {
    onFileSelect?: (file: File | null) => void;
}

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0] || null;
        onFileSelect?.(file);
    }, [onFileSelect])

    const {getRootProps, getInputProps, acceptedFiles} = useDropzone({
        onDrop, 
        multiple: false,
        maxSize: 20 * 1024 * 1024, // 20 MB
        accept: {
            'application/pdf': ['.pdf']
        }
    });

    const file = acceptedFiles[0] || null;


    return (
        <div className='w-full gradient-border'>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className='space-y-10 cursor-pointer'>                    
                    {file ? (
                        <div className='uploader-selected-file'>
                            <img src="/images/pdf.png" alt="pdf" className="size-10" />
                            <div className='flex items-center space-x-3'>
                                <div>
                                    <p className='text-md text-gray-700 font-medium truncate'>
                                        {file.name}
                                    </p>
                                    <p className='text-sm text-gray-500'>
                                        {formatSize(file.size)}
                                    </p>
                                </div>
                            </div>
                            <button className='cursor-pointer p-2' onClick={() => {
                                // e.stopPropagation();
                                onFileSelect?.(null);
                            }}>
                                <img src = "/icons/cross.svg" alt='remove' className='w-5 h-5' />
                            </button>
                        </div>
                    ) : (
                        <div>
                            <div className='mx-auto w-16 h-16 flex items-center justify-center'>
                              <img src="/icons/info.svg" alt='upload' className='size-15' />
                            </div>
                            <p className='text-lg text-gray-500'>
                                <span className='font-semibold'>
                                    Click to upload
                                </span> or drag and drop
                            </p>
                            <p className='text-md text-sky-400'>PDF (max 20 MB) </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FileUploader;