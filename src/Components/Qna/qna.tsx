import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps, } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { qnaList } from './qnaList'
import { useState } from 'react';


const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    '&:not(:last-child)': {
        borderBottom: `2px solid ${theme.palette.divider}`,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    let BG = require('../../assets/qna.webp'
    )
    const [isHovered, setIsHovered] = useState(false);

    const buttonClasses = `rounded-lg px-5 py-5 bg-[#ffc81b]] text-white 
    ${isHovered ? 'transition-colors ease-in-out hover:bg-[#00095e]' : 'bg-[#ffc81b]'
        }`;

    return (
        <>
            <div className='mt-[200px]'>
                <div className='text-center'>
                    <p className='text-[#7fa0fe]'>FAQ</p>
                    <h1 className='text-[#00095e] font-bold text-5xl'>Full range of travel service</h1>
                </div>
                <div className='flex justify-center items-center mt-[50px]'>
                    <div className='w-auto lg:w-[400px] md:w-[400px] mx-auto lg:mx-[100px]'>
                        {qnaList.map((list) => (
                            <Accordion
                                expanded={expanded === list.id}
                                onChange={handleChange(list.id)}
                                key={list.id}
                                className='mx-5'
                            >
                                <AccordionSummary aria-controls={`${list.id}d-content`} id={`${list.id}d-header`}>
                                    <Typography>{list.header}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>{list.content}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </div>
                    <div>
                        <img src={BG} alt="" />
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <a href="">
                        <button
                            className={buttonClasses}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            Book Your Destination
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}