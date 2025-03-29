import React from 'react'
import Giscus from '@giscus/react'
interface CommentProps {
  postId: string
}

const Comment: React.FC<CommentProps> = ({ postId }) => {
  const giscusConfig = {
    repo: 'chjjh0/giscus-sample' as const,
    repoId: 'R_kgDOOQn2RA',
    category: 'Comment',
    categoryId: 'DIC_kwDOOQn2RM4Cokpv',
    mapping: 'specific' as const,
    term: `post-${postId}`,
    strict: '0' as '0' | '1',
    reactionsEnabled: '1' as '0' | '1',
    emitMetadata: '0' as '0' | '1',
    inputPosition: 'top' as const,
    theme: 'purple_dark',
    lang: 'ko',
  }

  return (
    <>
      <Giscus {...giscusConfig} />
    </>
  )
}

export default Comment
