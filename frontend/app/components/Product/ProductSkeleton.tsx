import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
interface ProductSkeletonProps {
    circular?:number
    rectangular_width?:number
    rectangular_height?:number
};

function ProductSkeleton({circular=40, rectangular_width=210,rectangular_height=60}:ProductSkeletonProps) {
    return (
        <Stack spacing={1}>
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="circular" width={circular} height={circular} />
            <Skeleton variant="rectangular" width={rectangular_width} height={rectangular_height} />
            <Skeleton variant="rounded" width={rectangular_width} height={rectangular_height} />
        </Stack>
    );
};

export default ProductSkeleton;