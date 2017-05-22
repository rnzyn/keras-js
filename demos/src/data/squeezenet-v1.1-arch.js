export const ARCHITECTURE_DIAGRAM = [
  { name: 'conv1', className: 'Conv2D', details: '64 3x3 filters, 2x2 strides, padding valid', row: 0 },
  { name: 'relu_conv1', className: 'Activation', details: 'ReLU', row: 1 },
  { name: 'pool1', className: 'MaxPooling2D', details: '3x3 pool size, 2x2 strides, padding valid', row: 2 },
  { name: 'fire2/squeeze1x1', className: 'Conv2D', details: '16 1x1 filters, 1x1 strides, padding valid', row: 3 },
  { name: 'fire2/relu_squeeze1x1', className: 'Activation', details: 'ReLU', row: 4 },
  { name: 'fire2/expand1x1', className: 'Conv2D', details: '64 1x1 filters, 1x1 strides, padding valid', row: 5 },
  { name: 'fire2/expand3x3', className: 'Conv2D', details: '64 3x3 filters, 1x1 strides, padding same', row: 5 },
  { name: 'fire2/relu_expand1x1', className: 'Activation', details: 'ReLU', row: 6 },
  { name: 'fire2/relu_expand3x3', className: 'Activation', details: 'ReLU', row: 6 },
  { name: 'fire2/concat', className: 'Concatenate', details: 'by channel axis', row: 7 },
  { name: 'fire3/squeeze1x1', className: 'Conv2D', details: '16 1x1 filters, 1x1 strides, padding valid', row: 8 },
  { name: 'fire3/relu_squeeze1x1', className: 'Activation', details: 'ReLU', row: 9 },
  { name: 'fire3/expand1x1', className: 'Conv2D', details: '64 1x1 filters, 1x1 strides, padding valid', row: 10 },
  { name: 'fire3/expand3x3', className: 'Conv2D', details: '64 3x3 filters, 1x1 strides, padding same', row: 10 },
  { name: 'fire3/relu_expand1x1', className: 'Activation', details: 'ReLU', row: 11 },
  { name: 'fire3/relu_expand3x3', className: 'Activation', details: 'ReLU', row: 11 },
  { name: 'fire3/concat', className: 'Concatenate', details: 'by channel axis', row: 12 },
  { name: 'pool3', className: 'MaxPooling2D', details: '3x3 pool size, 2x2 strides, padding valid', row: 13 },
  { name: 'fire4/squeeze1x1', className: 'Conv2D', details: '32 1x1 filters, 1x1 strides, padding valid', row: 14 },
  { name: 'fire4/relu_squeeze1x1', className: 'Activation', details: 'ReLU', row: 15 },
  { name: 'fire4/expand1x1', className: 'Conv2D', details: '128 1x1 filters, 1x1 strides, padding valid', row: 16 },
  { name: 'fire4/expand3x3', className: 'Conv2D', details: '128 3x3 filters, 1x1 strides, padding same', row: 16 },
  { name: 'fire4/relu_expand1x1', className: 'Activation', details: 'ReLU', row: 17 },
  { name: 'fire4/relu_expand3x3', className: 'Activation', details: 'ReLU', row: 17 },
  { name: 'fire4/concat', className: 'Concatenate', details: 'by channel axis', row: 18 },
  { name: 'fire5/squeeze1x1', className: 'Conv2D', details: '32 1x1 filters, 1x1 strides, padding valid', row: 19 },
  { name: 'fire5/relu_squeeze1x1', className: 'Activation', details: 'ReLU', row: 20 },
  { name: 'fire5/expand1x1', className: 'Conv2D', details: '128 1x1 filters, 1x1 strides, padding valid', row: 21 },
  { name: 'fire5/expand3x3', className: 'Conv2D', details: '128 3x3 filters, 1x1 strides, padding same', row: 21 },
  { name: 'fire5/relu_expand1x1', className: 'Activation', details: 'ReLU', row: 22 },
  { name: 'fire5/relu_expand3x3', className: 'Activation', details: 'ReLU', row: 22 },
  { name: 'fire5/concat', className: 'Concatenate', details: 'by channel axis', row: 23 },
  { name: 'pool5', className: 'MaxPooling2D', details: '3x3 pool size, 2x2 strides, padding valid', row: 24 },
  { name: 'fire6/squeeze1x1', className: 'Conv2D', details: '48 1x1 filters, 1x1 strides, padding valid', row: 25 },
  { name: 'fire6/relu_squeeze1x1', className: 'Activation', details: 'ReLU', row: 26 },
  { name: 'fire6/expand1x1', className: 'Conv2D', details: '192 1x1 filters, 1x1 strides, padding valid', row: 27 },
  { name: 'fire6/expand3x3', className: 'Conv2D', details: '192 3x3 filters, 1x1 strides, padding same', row: 27 },
  { name: 'fire6/relu_expand1x1', className: 'Activation', details: 'ReLU', row: 28 },
  { name: 'fire6/relu_expand3x3', className: 'Activation', details: 'ReLU', row: 28 },
  { name: 'fire6/concat', className: 'Concatenate', details: 'by channel axis', row: 29 },
  { name: 'fire7/squeeze1x1', className: 'Conv2D', details: '48 1x1 filters, 1x1 strides, padding valid', row: 30 },
  { name: 'fire7/relu_squeeze1x1', className: 'Activation', details: 'ReLU', row: 31 },
  { name: 'fire7/expand1x1', className: 'Conv2D', details: '192 1x1 filters, 1x1 strides, padding valid', row: 32 },
  { name: 'fire7/expand3x3', className: 'Conv2D', details: '192 3x3 filters, 1x1 strides, padding same', row: 32 },
  { name: 'fire7/relu_expand1x1', className: 'Activation', details: 'ReLU', row: 33 },
  { name: 'fire7/relu_expand3x3', className: 'Activation', details: 'ReLU', row: 33 },
  { name: 'fire7/concat', className: 'Concatenate', details: 'by channel axis', row: 34 },
  { name: 'fire8/squeeze1x1', className: 'Conv2D', details: '64 1x1 filters, 1x1 strides, padding valid', row: 35 },
  { name: 'fire8/relu_squeeze1x1', className: 'Activation', details: 'ReLU', row: 36 },
  { name: 'fire8/expand1x1', className: 'Conv2D', details: '256 1x1 filters, 1x1 strides, padding valid', row: 37 },
  { name: 'fire8/expand3x3', className: 'Conv2D', details: '256 3x3 filters, 1x1 strides, padding same', row: 37 },
  { name: 'fire8/relu_expand1x1', className: 'Activation', details: 'ReLU', row: 38 },
  { name: 'fire8/relu_expand3x3', className: 'Activation', details: 'ReLU', row: 38 },
  { name: 'fire8/concat', className: 'Concatenate', details: 'by channel axis', row: 39 },
  { name: 'fire9/squeeze1x1', className: 'Conv2D', details: '64 1x1 filters, 1x1 strides, padding valid', row: 40 },
  { name: 'fire9/relu_squeeze1x1', className: 'Activation', details: 'ReLU', row: 41 },
  { name: 'fire9/expand1x1', className: 'Conv2D', details: '256 1x1 filters, 1x1 strides, padding valid', row: 42 },
  { name: 'fire9/expand3x3', className: 'Conv2D', details: '256 3x3 filters, 1x1 strides, padding same', row: 42 },
  { name: 'fire9/relu_expand1x1', className: 'Activation', details: 'ReLU', row: 43 },
  { name: 'fire9/relu_expand3x3', className: 'Activation', details: 'ReLU', row: 43 },
  { name: 'fire9/concat', className: 'Concatenate', details: 'by channel axis', row: 44 },
  { name: 'drop9', className: 'Dropout', details: 'p=0.5 (only active during training phase)', row: 45 },
  { name: 'conv10', className: 'Conv2D', details: '1000 1x1 filters, 1x1 strides, padding valid', row: 46 },
  { name: 'relu_conv10', className: 'Activation', details: 'ReLU', row: 47 },
  { name: 'global_average_pooling2d_1', className: 'GlobalAveragePooling2D', details: '', row: 48 },
  { name: 'loss', className: 'Activation', details: 'Softmax', row: 49 }
]

export const ARCHITECTURE_CONNECTIONS = [
  { from: 'conv1', to: 'fire2/relu_squeeze1x1' },
  { from: 'fire2/relu_squeeze1x1', to: 'fire2/expand1x1', corner: 'top-left' },
  { from: 'fire2/relu_squeeze1x1', to: 'fire2/expand3x3', corner: 'top-right' },
  { from: 'fire2/expand1x1', to: 'fire2/relu_expand1x1' },
  { from: 'fire2/expand3x3', to: 'fire2/relu_expand3x3' },
  { from: 'fire2/relu_expand1x1', to: 'fire2/concat', corner: 'bottom-left' },
  { from: 'fire2/relu_expand3x3', to: 'fire2/concat', corner: 'bottom-right' },

  { from: 'fire2/concat', to: 'fire3/relu_squeeze1x1' },
  { from: 'fire3/relu_squeeze1x1', to: 'fire3/expand1x1', corner: 'top-left' },
  { from: 'fire3/relu_squeeze1x1', to: 'fire3/expand3x3', corner: 'top-right' },
  { from: 'fire3/expand1x1', to: 'fire3/relu_expand1x1' },
  { from: 'fire3/expand3x3', to: 'fire3/relu_expand3x3' },
  { from: 'fire3/relu_expand1x1', to: 'fire3/concat', corner: 'bottom-left' },
  { from: 'fire3/relu_expand3x3', to: 'fire3/concat', corner: 'bottom-right' },

  { from: 'fire3/concat', to: 'fire4/relu_squeeze1x1' },
  { from: 'fire4/relu_squeeze1x1', to: 'fire4/expand1x1', corner: 'top-left' },
  { from: 'fire4/relu_squeeze1x1', to: 'fire4/expand3x3', corner: 'top-right' },
  { from: 'fire4/expand1x1', to: 'fire4/relu_expand1x1' },
  { from: 'fire4/expand3x3', to: 'fire4/relu_expand3x3' },
  { from: 'fire4/relu_expand1x1', to: 'fire4/concat', corner: 'bottom-left' },
  { from: 'fire4/relu_expand3x3', to: 'fire4/concat', corner: 'bottom-right' },

  { from: 'fire4/concat', to: 'fire5/relu_squeeze1x1' },
  { from: 'fire5/relu_squeeze1x1', to: 'fire5/expand1x1', corner: 'top-left' },
  { from: 'fire5/relu_squeeze1x1', to: 'fire5/expand3x3', corner: 'top-right' },
  { from: 'fire5/expand1x1', to: 'fire5/relu_expand1x1' },
  { from: 'fire5/expand3x3', to: 'fire5/relu_expand3x3' },
  { from: 'fire5/relu_expand1x1', to: 'fire5/concat', corner: 'bottom-left' },
  { from: 'fire5/relu_expand3x3', to: 'fire5/concat', corner: 'bottom-right' },

  { from: 'fire5/concat', to: 'fire6/relu_squeeze1x1' },
  { from: 'fire6/relu_squeeze1x1', to: 'fire6/expand1x1', corner: 'top-left' },
  { from: 'fire6/relu_squeeze1x1', to: 'fire6/expand3x3', corner: 'top-right' },
  { from: 'fire6/expand1x1', to: 'fire6/relu_expand1x1' },
  { from: 'fire6/expand3x3', to: 'fire6/relu_expand3x3' },
  { from: 'fire6/relu_expand1x1', to: 'fire6/concat', corner: 'bottom-left' },
  { from: 'fire6/relu_expand3x3', to: 'fire6/concat', corner: 'bottom-right' },

  { from: 'fire6/concat', to: 'fire7/relu_squeeze1x1' },
  { from: 'fire7/relu_squeeze1x1', to: 'fire7/expand1x1', corner: 'top-left' },
  { from: 'fire7/relu_squeeze1x1', to: 'fire7/expand3x3', corner: 'top-right' },
  { from: 'fire7/expand1x1', to: 'fire7/relu_expand1x1' },
  { from: 'fire7/expand3x3', to: 'fire7/relu_expand3x3' },
  { from: 'fire7/relu_expand1x1', to: 'fire7/concat', corner: 'bottom-left' },
  { from: 'fire7/relu_expand3x3', to: 'fire7/concat', corner: 'bottom-right' },

  { from: 'fire7/concat', to: 'fire8/relu_squeeze1x1' },
  { from: 'fire8/relu_squeeze1x1', to: 'fire8/expand1x1', corner: 'top-left' },
  { from: 'fire8/relu_squeeze1x1', to: 'fire8/expand3x3', corner: 'top-right' },
  { from: 'fire8/expand1x1', to: 'fire8/relu_expand1x1' },
  { from: 'fire8/expand3x3', to: 'fire8/relu_expand3x3' },
  { from: 'fire8/relu_expand1x1', to: 'fire8/concat', corner: 'bottom-left' },
  { from: 'fire8/relu_expand3x3', to: 'fire8/concat', corner: 'bottom-right' },

  { from: 'fire8/concat', to: 'fire9/relu_squeeze1x1' },
  { from: 'fire9/relu_squeeze1x1', to: 'fire9/expand1x1', corner: 'top-left' },
  { from: 'fire9/relu_squeeze1x1', to: 'fire9/expand3x3', corner: 'top-right' },
  { from: 'fire9/expand1x1', to: 'fire9/relu_expand1x1' },
  { from: 'fire9/expand3x3', to: 'fire9/relu_expand3x3' },
  { from: 'fire9/relu_expand1x1', to: 'fire9/concat', corner: 'bottom-left' },
  { from: 'fire9/relu_expand3x3', to: 'fire9/concat', corner: 'bottom-right' },

  { from: 'fire9/concat', to: 'loss' }
]
