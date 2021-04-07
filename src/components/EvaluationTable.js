import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import Paper from '@material-ui/core/Paper'

class EvaluationTable extends React.Component {
  render() {
    return (
      <div className={`EvaluationSummary`}>
        <h1>Table d'évaluation</h1>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Points</TableCell>
                <TableCell>Note</TableCell>
                <TableCell>Points</TableCell>
                <TableCell>Note</TableCell>
                <TableCell>Points</TableCell>
                <TableCell>Note</TableCell>
                <TableCell>Points</TableCell>
                <TableCell>Note</TableCell>
                <TableCell>Points</TableCell>
                <TableCell>Note</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>0 - 1</TableCell>
                <TableCell>1.0</TableCell>
                <TableCell>23 - 25</TableCell>
                <TableCell>2.0</TableCell>
                <TableCell>47 - 49</TableCell>
                <TableCell>3.0</TableCell>
                <TableCell>71 - 73</TableCell>
                <TableCell>4.0</TableCell>
                <TableCell>95 - 97</TableCell>
                <TableCell>5.0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2 - 3</TableCell>
                <TableCell>1.1</TableCell>
                <TableCell>26 - 27</TableCell>
                <TableCell>2.1</TableCell>
                <TableCell>50 - 51</TableCell>
                <TableCell>3.1</TableCell>
                <TableCell>74 - 75</TableCell>
                <TableCell>4.1</TableCell>
                <TableCell>98 - 99</TableCell>
                <TableCell>5.1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4 - 5</TableCell>
                <TableCell>1.2</TableCell>
                <TableCell>28 - 29</TableCell>
                <TableCell>2.2</TableCell>
                <TableCell>52 - 53</TableCell>
                <TableCell>3.2</TableCell>
                <TableCell>76 - 77</TableCell>
                <TableCell>4.2</TableCell>
                <TableCell>100 - 101</TableCell>
                <TableCell>5.2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>6 - 8</TableCell>
                <TableCell>1.3</TableCell>
                <TableCell>30 - 32</TableCell>
                <TableCell>2.3</TableCell>
                <TableCell>54 - 56</TableCell>
                <TableCell>3.3</TableCell>
                <TableCell>78 - 80</TableCell>
                <TableCell>4.3</TableCell>
                <TableCell>102 - 104</TableCell>
                <TableCell>5.3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>9 - 10</TableCell>
                <TableCell>1.4</TableCell>
                <TableCell>33 - 34</TableCell>
                <TableCell>2.4</TableCell>
                <TableCell>57 - 58</TableCell>
                <TableCell>3.4</TableCell>
                <TableCell>81 - 82</TableCell>
                <TableCell>4.4</TableCell>
                <TableCell>105 - 106</TableCell>
                <TableCell>5.4</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>11 - 13</TableCell>
                <TableCell>1.5</TableCell>
                <TableCell>35 - 37</TableCell>
                <TableCell>2.5</TableCell>
                <TableCell>59 - 61</TableCell>
                <TableCell>3.5</TableCell>
                <TableCell>83 - 85</TableCell>
                <TableCell>4.5</TableCell>
                <TableCell>107 - 109</TableCell>
                <TableCell>5.5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>14 - 15</TableCell>
                <TableCell>1.6</TableCell>
                <TableCell>38 - 39</TableCell>
                <TableCell>2.6</TableCell>
                <TableCell>62 - 63</TableCell>
                <TableCell>3.6</TableCell>
                <TableCell>86 - 87</TableCell>
                <TableCell>4.6</TableCell>
                <TableCell>110 - 111</TableCell>
                <TableCell>5.6</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>16 - 17</TableCell>
                <TableCell>1.7</TableCell>
                <TableCell>40 - 41</TableCell>
                <TableCell>2.7</TableCell>
                <TableCell>64 - 65</TableCell>
                <TableCell>3.7</TableCell>
                <TableCell>88 - 89</TableCell>
                <TableCell>4.7</TableCell>
                <TableCell>112 - 113</TableCell>
                <TableCell>5.7</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>18 - 20</TableCell>
                <TableCell>1.8</TableCell>
                <TableCell>42 - 44</TableCell>
                <TableCell>2.8</TableCell>
                <TableCell>66 - 68</TableCell>
                <TableCell>3.8</TableCell>
                <TableCell>90 - 92</TableCell>
                <TableCell>4.8</TableCell>
                <TableCell>114 - 116</TableCell>
                <TableCell>5.8</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>21 - 22</TableCell>
                <TableCell>1.9</TableCell>
                <TableCell>45 - 46</TableCell>
                <TableCell>2.9</TableCell>
                <TableCell>69 - 70</TableCell>
                <TableCell>3.9</TableCell>
                <TableCell>93 - 94</TableCell>
                <TableCell>4.9</TableCell>
                <TableCell>117 - 118</TableCell>
                <TableCell>5.9</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&nbsp;</TableCell>
                <TableCell>&nbsp;</TableCell>
                <TableCell>&nbsp;</TableCell>
                <TableCell>&nbsp;</TableCell>
                <TableCell>&nbsp;</TableCell>
                <TableCell>&nbsp;</TableCell>
                <TableCell>&nbsp;</TableCell>
                <TableCell>&nbsp;</TableCell>
                <TableCell>119 - 120</TableCell>
                <TableCell>6.0</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  }
}

export { EvaluationTable }
