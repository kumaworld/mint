
import { Grid, IconButton, OutlinedInput, TextField } from '@mui/material'
import { FaMinus, FaPaw, FaPlus } from 'react-icons/fa'
import LoadingButton from '@mui/lab/LoadingButton';
import styles from '../styles/MintSection.module.css'
import { useState } from 'react';
import { selectAuth } from '../stores/auth-slice';
import { useAppDispatch, useAppSelector } from '../stores/hooks';
import { ethers } from 'ethers';
import KumaWorld from '../utils/KumaWorld.json'
import { selectKuma, setIsAdopting, setTexts } from '../stores/kuma-slice';
import { CONTRACT_ADDRESS } from '../utils/constants';

const MintSection = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { account } = useAppSelector(selectAuth)
  const { isAdopting } = useAppSelector(selectKuma)
  const [qty, setQty] = useState(1)

  const onClickIncrease = () => {
    const increment = qty + 1 
    if (increment > 10) {
      return
    }

    setQty(increment)
  }

  const onClickDecrement = () => {
    const decrement = qty - 1 
    if (decrement < 1) {
      return
    }

    setQty(decrement)
  }

  const onClickMint = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner()
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, KumaWorld.abi, signer)

        let nftTxn = await connectedContract.makeAnEpicNFT()

        dispatch(setIsAdopting(true))
        dispatch(setTexts(['Adopting bears...', 'Waiting...', 'Generating kumas...']))
        await nftTxn.wait()
        console.log(nftTxn)
        dispatch(setTexts([`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`]))
      } else {
        console.log("Ethereum object doesn't exist")
        dispatch(setTexts(['First install Metamask', 'Why are you taking so long ?']))
      }
    } catch (error) {
      dispatch(setTexts(['Error !!!!, try again']))
      console.log(error)
      dispatch(setIsAdopting(false))
    }
  }

  return (
    <div className={styles.mintSection}>
      <Grid className={styles.qtyMint} container textAlign="center" alignItems="center">
        <Grid item xs={4}>
          <IconButton className={styles.actionIcon} onClick={onClickDecrement}>
            <FaMinus />
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          <TextField className={styles.input} value={qty} disabled/>
        </Grid>
        <Grid item xs={4}>
          <IconButton className={styles.actionIcon} onClick={onClickIncrease}>
            <FaPlus />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container alignItems="center" textAlign="center">
        <Grid item xs={3} />
        <Grid item xs={6}>
          <LoadingButton
           sx={{
            fontWeight: 'bold',
            borderRadius: '100px',
            backgroundColor: 'tomato',
            "&:hover": {
              backgroundColor: '#af321c',
            }
           }}
           loading={isAdopting}
           className={styles.mintButton}
           color="primary"
           disabled={account.length <= 0}
           variant="contained"
           onClick={onClickMint}
           startIcon={<FaPaw />}>
            {isAdopting ? 'Adopting Kumas' : 'Adopt kuma'}
          </LoadingButton>
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </div>
  )
}

export default MintSection