import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/component/Popper';
import Image from '../Image';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);
function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };
  return (
    <div>
      <Tippy offset={[-20,0]} interactive delay={[800, 0]} placement="bottom" render={renderPreview}>
        <div className={cx('account-item')}>
          <Image
            className={cx('avatar')}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1673978400&x-signature=13ZBQ3fHA6KifAcNI8FZSjNr0IA%3D"
          />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>nguyenphu</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Nguyễn Phú</p>
            
          </div>
        </div>
      </Tippy>
    </div>
  );
}
AccountItem.propTypes = {};
export default AccountItem;
