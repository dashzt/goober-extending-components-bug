import { Red50, Blue50, Blue100 } from '../boxes'

export const Broken = () => {
  return <div>
    <h3>Broken case</h3>
    <Red50>
      Red 50
    </Red50>
    <Blue100>
      Blue 100
    </Blue100>
    <Blue50>
      Blue 50
    </Blue50>
    <br />
    <span>If you take a closer look on Blue 100 and Blue 50 boxes, you can see it actually has a class which has background: blue, but it is put into styles tag in wrong order</span>
  </div>
}