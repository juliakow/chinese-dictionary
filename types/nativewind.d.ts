import 'react-native';
import type {
  ViewStyle,
  TextStyle,
  ImageStyle,
  ScrollViewProps,
  ActivityIndicatorProps,
  ImageProps,
  FlatListProps,
  SectionListProps,
  TextInputProps,
  TouchableOpacityProps,
  TouchableHighlightProps,
  TouchableWithoutFeedbackProps,
  PressableProps
} from 'react-native';

declare module 'react-native' {
  interface ViewProps {
    className?: string;
    tw?: string;
  }
  
  interface TextProps {
    className?: string;
    tw?: string;
  }
  
  interface TextInputProps {
    className?: string;
    tw?: string;
  }
  
  interface TouchableOpacityProps {
    className?: string;
    tw?: string;
  }
  
  interface ScrollViewProps {
    className?: string;
    tw?: string;
  }
  
  interface ActivityIndicatorProps {
    className?: string;
    tw?: string;
  }
  
  interface ImageProps {
    className?: string;
    tw?: string;
  }
  
  interface FlatListProps<ItemT> {
    className?: string;
    tw?: string;
    contentContainerClassName?: string;
    contentContainerTw?: string;
    listClassName?: string;
    listTw?: string;
  }
  
  interface SectionListProps<ItemT, SectionT> {
    className?: string;
    tw?: string;
    contentContainerClassName?: string;
    contentContainerTw?: string;
    listClassName?: string;
    listTw?: string;
  }
  
  interface TouchableHighlightProps {
    className?: string;
    tw?: string;
  }
  
  interface TouchableWithoutFeedbackProps {
    className?: string;
    tw?: string;
  }
  
  interface PressableProps {
    className?: string;
    tw?: string;
  }

  interface ViewStyle {
    tw?: string;
  }
  
  interface TextStyle {
    tw?: string;
  }
  
  interface ImageStyle {
    tw?: string;
  }
}

declare