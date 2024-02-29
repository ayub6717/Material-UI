import { Stack, Button } from '@mui/material'
import React from 'react'

export const MuiButton = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant="contained" color="secondary">Secondary</Button>
                <Button variant="contained" color="primary">Primary</Button>
                <Button variant="contained" color="warning">Warning</Button>
                <Button variant="contained" color="info">Info</Button>
                <Button variant="contained" color="success"> Success</Button>
                <Button variant="contained" color="error">Error</Button>
            </Stack>
        </Stack>
    )
}
