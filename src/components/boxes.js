import { styled, setup } from 'goober'
import { h } from 'preact'

setup(h);

export const Red50 = styled('button')`
  width: 50px;
  height: 50px;
  background: red;
  color: white;
`

export const Blue50 = styled(Red50)`
  background: blue;
`

export const Blue100 = styled(Blue50)`
  width: 100px;
  height: 100px;
`
