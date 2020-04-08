# node-test-action

Github Action that tests node project

# Author

[onichandame](https://github.com/onichandame)

# Usage

```yaml
name: Test
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Test
        uses: onichandame/node-test-action@master
```
