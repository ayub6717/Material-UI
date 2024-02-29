import React from 'react'
import { Typography } from '@mui/material'

export const MuiTypography = () => {
    return (
        <div>
            <Typography variant='h1'>h1 Heading</Typography>
            <Typography variant='h2'>h2 Heading</Typography>
            <Typography variant='h3'>h3 Heading</Typography>
            <Typography variant='h4' component='h1' gutterBottom>h4 Heading</Typography>
            <Typography variant='h5'>h5 Heading</Typography>
            <Typography variant='h6'>h6 Heading</Typography>

            <Typography variant='subtitle1'>subtitle 1</Typography>
            <Typography variant='subtitle2'>subtitle 2</Typography>

            <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit asperiores assumenda iusto incidunt eaque reiciendis rerum, aliquid a impedit quis distinctio nam dolor sapiente et hic sit adipisci, accusantium minima. 1</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deserunt, quam odit possimus voluptate veritatis magni reiciendis minima eius quis, quidem iste commodi nisi debitis id mollitia distinctio esse nulla? 2</Typography>

            <Typography variant="button" display="block" gutterBottom>
                button text
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                caption text
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
                overline text
            </Typography>
        </div>
    )
}
