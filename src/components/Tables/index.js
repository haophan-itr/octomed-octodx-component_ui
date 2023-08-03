import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import classnames from 'classnames';
import { t } from 'ttag';
import _ from 'lodash';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import NormalButton from '../Buttons/NormalButton';

import { useMergeState } from '../../../utils/customHooks';
import IconArrowDown from '../../../../../static/images/caret.svg';
import IconNext from '../../../static/images/icon-next-page.svg';
import IconPrev from '../../../static/images/icon-prev-page.svg';
import './styles.scss';

const TableComponent = (props) => {
  const [state, setState] = useMergeState({
    isOpenSizePerPageDropdown: false,
  });

  const pageListRenderer = ({ pages, onPageChange }) => {
    if (!pages.length || !props.isLoadedData) {
      return null;
    }

    const pageWithoutIndication = _.filter(pages, p => typeof p.page !== 'string');

    // *: Slice pages to display maximum 3 page buttons
    const activeId = _.findIndex(pageWithoutIndication, item => item.active);
    const start = activeId < 2
      ? activeId
      : activeId === pageWithoutIndication.length - 1 ? activeId - 2 : activeId - 1;
    const drawnPages = pageWithoutIndication.length < 3
      ? pageWithoutIndication
      : pageWithoutIndication.slice(start, start + 3);

    // *: Active next page if overflow pages array
    if (pageWithoutIndication[activeId]?.page !== props.page) {
      if (props.page <= pageWithoutIndication[pageWithoutIndication.length - 1]?.page) {
        props.navigatePage(props.page);
        onPageChange(props.page);
      } else {
        props.navigatePage(pageWithoutIndication[pageWithoutIndication.length - 1]?.page);
        onPageChange(pageWithoutIndication[pageWithoutIndication.length - 1]?.page);
      }
    }

    return (
      <Col xs="6" className="custom-pagination-list">
        {/* <NormalButton
          className={classnames('pagination-btn', props.page < 4 ? 'hidden' : '')}
          isOutline
          buttonName="<<"
          onClick={() => {
            props.navigatePage(1);
          }}
        /> */}

        <NormalButton
          className={classnames('prev-btn', props.page === 1 ? 'hidden' : '')}
          hasIcon
          iconComponent={<img src={IconPrev} alt="Icon next page" />}
          onClick={() => {
            props.navigatePage(props.page - 1);
          }}
        />

        {
          _.map(drawnPages, (p, index) => (
            <NormalButton
              key={index}
              className="pagination-btn"
              isFilled={p.page === props.page}
              isOutline={p.page !== props.page}
              buttonName={p.page}
              onClick={() => {
                props.navigatePage(p.page);
              }}
            />
          ))
        }

        <NormalButton
          className={classnames('next-btn', props.page * props.sizePerPage > props.data.length ? 'hidden' : '')}
          hasIcon
          iconComponent={<img src={IconNext} alt="Icon next page" />}
          onClick={() => {
            props.navigatePage(props.page + 1);
          }}
        />

        {/* <NormalButton
          className={classnames('pagination-btn', props.page * 10 >= props.data.length ? 'hidden' : '')}
          isOutline
          buttonName=">>"
          onClick={() => {
            props.navigatePage(Math.ceil(props.data.length / 10));
          }}
        /> */}
      </Col>
    );
  };

  const pageButtonRenderer = ({
    page,
    active,
    title,
    onPageChange,
  }) => {
    const handleClick = (e) => {
      e.preventDefault();
      onPageChange(page);
    };
    return (
      <NormalButton
        className="pagination-btn"
        isPrimary2
        isFilled={active}
        buttonName={title}
        onClick={handleClick}
      />
    );
  };

  const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
    <Dropdown
      key={currSizePerPage}
      className="custom-size-per-page-btn-dropdown"
      direction="up"
      isOpen={state.isOpenSizePerPageDropdown}
      toggle={() => {
        setState({ isOpenSizePerPageDropdown: !state.isOpenSizePerPageDropdown });
      }}
    >
      <DropdownToggle caret>
        {`${currSizePerPage} rows`}
        <img src={IconArrowDown} alt="Sale portal" />
      </DropdownToggle>
      <DropdownMenu>
        {
          _.map(options, (option, index) => (
            <DropdownItem
              key={index}
              onClick={() => {
                onSizePerPageChange(option.page);
              }}
              active={String(option.page) === currSizePerPage}
            >
              {option.text}
            </DropdownItem>
          ))
        }
      </DropdownMenu>
    </Dropdown>
  );

  const paginationTotalRenderer = (from, to, size) => (
    <span className="total-size">{`Showing ${from} - ${to} of ${size}`}</span>
  );

  const options = {
    page: props.page,
    sizePerPageList: [{
      text: t`10 rows`, value: 10,
    }, {
      text: t`30 rows`, value: 30,
    }, {
      text: t`50 rows`, value: 50,
    }],
    sizePerPageRenderer,
    sizePerPage: props.sizePerPage,
    onSizePerPageChange: props.onSizePerPageChange,
    // paginationSize: !props.isShowAll && props.maxDisplayedData / 10 < 5 ? props.maxDisplayedData / 10 : 5,
    paginationSize: props.isShowAll ? 5 : props.page,
    showTotal: false,
    withFirstAndLast: props.isShowAll,
    hideSizePerPage: !!(props.isEndOfData && props.data.length < 10),
    hidePageListOnlyOnePage: props.isShowAll,
    firstPageTitle: '<<',
    prePageTitle: '<',
    nextPageTitle: '>',
    lastPageTitle: '>>',
    onPageChange: props.onPageChange,
    paginationTotalRenderer,
    pageListRenderer: props.isShowAll ? undefined : pageListRenderer,
    pageButtonRenderer: props.isShowAll ? pageButtonRenderer : undefined,
  };

  const rowEvents = {
    ...props.rowEvents,
    onMouseEnter: (e, row) => {
      const actionButtonRowElement = document.getElementById(`action-button-row-${row.actionButtonTag}`);
      if (actionButtonRowElement) {
        actionButtonRowElement.classList.add('show-action-button-row');
      }

      const warningLineElement = document.getElementById(`info-warning-${row.actionButtonTag}`);
      if (warningLineElement) {
        warningLineElement.classList.add('hidden');
      }

      const rowElement = e.currentTarget;
      if (rowElement) {
        rowElement.classList.add('--have-background-color');
      }
    },

    onMouseLeave: (e, row) => {
      const actionButtonRowElement = document.getElementById(`action-button-row-${row.actionButtonTag}`);
      if (actionButtonRowElement) {
        actionButtonRowElement.classList.remove('show-action-button-row');
      }

      const warningLineElement = document.getElementById(`info-warning-${row.actionButtonTag}`);
      if (warningLineElement) {
        warningLineElement.classList.remove('hidden');
      }

      const rowElement = e.currentTarget;
      if (rowElement) {
        rowElement.classList.remove('--have-background-color');
      }
    },
  };

  const rowClasses = row => (
    classnames(`animated fadeIn faster ${row.id}`, props.rowClasses)
  );
  return (
    <div className={classnames('custom-table-container', props.isLarge ? 'table-large' : 'table-small')}>
      <BootstrapTable
        keyField={props.keyField}
        data={props.data.slice(0, props.maxDisplayedData)}
        columns={props.columns}
        classes={classnames('custom-table', props.className)}
        wrapperClasses={props.wrapperClasses}
        condensed={props.condensed}
        striped={props.striped}
        hover={props.hover}
        noDataIndication={props.noDataIndication}
        pagination={paginationFactory(options)}
        bordered={props.bordered}
        rowEvents={rowEvents}
        selectRow={props.selectRow}
        rowClasses={rowClasses}
        remote={{
          filter: props.remoteFilter,
          pagination: props.remotePagination,
          sort: props.isHandleSort,
          cellEdit: props.remoteCellEdit,
        }}
        onTableChange={(type, newState) => {
          props.onTableChange(type, newState);
        }}
        defaultSortDirection={props.defaultSortDirection}
      />
    </div>
  );
};

TableComponent.defaultProps = {
  className: '',
  selectRow: undefined,
  isShowAll: false,
  onPageChange: () => { },
  onSizePerPageChange: () => { },
  rowEvents: {},
  rowClasses: '',
  isEndOfData: false,
  isHandleSort: false,
  condensed: false,
  striped: false,
  hover: false,
  bordered: false,
  remoteFilter: false,
  remotePagination: false,
  remoteCellEdit: false,
  onTableChange: () => { },
  noDataIndication: 'There is no data to display',
  defaultSortDirection: 'asc',
  isLarge: false,
};

TableComponent.propTypes = {
  keyField: PropTypes.string.isRequired,
  className: PropTypes.string,
  isLoadedData: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  maxDisplayedData: PropTypes.number.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  page: PropTypes.number.isRequired,
  sizePerPage: PropTypes.number.isRequired,
  navigatePage: PropTypes.func.isRequired,
  selectRow: PropTypes.shape(),
  isShowAll: PropTypes.bool,
  isEndOfData: PropTypes.bool,
  onPageChange: PropTypes.func,
  onSizePerPageChange: PropTypes.func,
  rowEvents: PropTypes.shape(),
  rowClasses: PropTypes.string,
  isHandleSort: PropTypes.bool,
  onTableChange: PropTypes.func,
  wrapperClasses: PropTypes.string.isRequired,
  noDataIndication: PropTypes.string,
  condensed: PropTypes.bool,
  striped: PropTypes.bool,
  hover: PropTypes.bool,
  bordered: PropTypes.bool,
  remoteFilter: PropTypes.bool,
  remotePagination: PropTypes.bool,
  remoteCellEdit: PropTypes.bool,
  defaultSortDirection: PropTypes.string,
  isLarge: PropTypes.bool,
};

export default TableComponent;
