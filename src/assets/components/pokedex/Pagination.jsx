import React from 'react'

const Pagination = ({ page, pagesLength, setpage }) => {


    const pagesPerBlock = 5
    const currentBlock = Math.ceil(page / pagesPerBlock)
    const blockLength = Math.ceil(pagesLength / pagesPerBlock)

    const arrPages = []
    const initialPage = (currentBlock - 1) * pagesPerBlock + 1
    const limitPage = blockLength === currentBlock ? pagesLength : currentBlock * pagesPerBlock

    for (let i = initialPage; i <= limitPage; i++) {
        arrPages.push(i)
    }

    const handlePreviousPage = () => {
        setpage(page - 1)
    }

    const handleNextPage = () => {
        setpage(page + 1)
    }

    const handlePage = currentPage => {
        setpage(currentPage)
    }


    return (
        <div className='pagination'>
            {
                page > 1 &&
                <div className='pagination__prev pagination__active' onClick={handlePreviousPage}>&#60;</div>
            }
            <div>...</div>
            <ul className='pagination__list'>
                {arrPages.map(e => (
                    <li className={`pagination__page ${page === e && 'pagination__active'}`} onClick={() => handlePage(e)} key={e}>{e}</li>
                ))
                }
            </ul>
            <div>...</div>
            {
                page < pagesLength &&
                <div className='pagination__next pagination__active' onClick={handleNextPage}>&#62;</div>
            }
        </div>
    )
}

export default Pagination