import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clx from 'classnames';

import { esy_util as _ } from '../public/util';

export interface OptGroupProps {
    size?: string;
    prefixCls?: string;
    className?: string;
    value?: string;
}
export default class OptGroup extends Component<OptGroupProps, any> {

    static propTypes = {
        size: PropTypes.string,
        value: PropTypes.string
    };

    static defaultProps = {
        size: 'small',
        prefixCls: 'esy-optGroup'
    };

    render() {
        const { children, prefixCls, size, className, value } = this.props;
        const new_children = children.map(item => {
            if (value == item.props.children) {
                return {
                    ...item,
                    props: {
                        ...item.props,
                        active: true
                    }
                }
            } else  {
                return {
                    ...item,
                    props: {
                        ...item.props,
                        active: false
                    }
                }
            }
        });
        return <div className={clx(prefixCls, {
            [`${prefixCls}-${_.getSizeOfInput(size)}`]: size
        }, className)}>
            <ul>
                {new_children}
            </ul>
        </div>
    }
}