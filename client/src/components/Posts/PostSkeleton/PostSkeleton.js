import Skeleton from '@material-ui/lab/Skeleton';
import { Card, CardContent } from '@material-ui/core';

const PostSkeleton = () => {
  return (
    <Card>
      <Skeleton animation='wave' variant='rect' style={{ height: '190px' }} />
      <CardContent>
        <Skeleton animation='wave' height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation='wave' height={10} width='80%' />
      </CardContent>
    </Card>
  );
};

export default PostSkeleton;
