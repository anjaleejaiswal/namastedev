import React from 'react';
import Comment from './Comment';

const CommentData = [
    {
        name : "Anjali Kumari",
        text : "lorem ipsum dolor",
        replies : []
    },
    {
        name : "Anjali Kumari",
        text : "lorem ipsum dolor",
        replies : [
            {
                name : "Anjali Kumari",
                text : "lorem ipsum dolor",
                replies : [
                    {
                        name : "Anjali Kumari",
                        text : "lorem ipsum dolor",
                        replies : [
                            {
                                name : "Anjali Kumari",
                                text : "lorem ipsum dolor",
                                replies : [
                                    {
                                        name : "Anjali Kumari",
                                        text : "lorem ipsum dolor",
                                        replies : []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name : "Anjali Kumari",
                        text : "lorem ipsum dolor",
                        replies : []
                    }
                ]
            }
        ]

    },
    {
        name : "Anjali Kumari",
        text : "lorem ipsum dolor",
        replies : []
    },
    {
        name : "Anjali Kumari",
        text : "lorem ipsum dolor",
        replies : []
    },
    {
        name : "Anjali Kumari",
        text : "lorem ipsum dolor",
        replies : []
    }
];

const CommentList = ({comment}) => {
    return comment.map((item,index) => (
        <div key={index}>
            <Comment  data={item}/>
            <div className='pl-5 border border-l-black ml-5'>
                <CommentList comment={item.replies}/>
            </div>
        </div>
    ));
};

const CommentContainer = () => {
  return (
    <div className='m-2 p-2'>
        <div className='text-2xl font-bold'>Comments</div>
        <CommentList comment={CommentData}/>
    </div>
  )
}

export default CommentContainer