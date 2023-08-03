import { Divider, PageHeader, Tabs } from 'antd';
import _ from 'lodash';
import Skeleton from 'react-loading-skeleton';
import React, { useCallback, useEffect, useRef } from 'react';
import TableComponent from '../../componentUI/components/Tables';
import { useMergeState } from '../../utils/customHooks';
import { toastrWarning } from '../../utils/toastNotification';

import IconCaretDesc from '../../static/images/caret-desc.svg';
import IconCaretAsc from '../../static/images/caret-asc.svg';
import IconCaretBlue from '../../static/images/caret-blue.svg';

import './styles.scss';

const { TabPane } = Tabs;

const TablePage = (props) => {
  const [state, setState] = useMergeState({
    isLoading: false,
    skeletonPatient: _.map(_.range(10), item => ({
      rmaId: item,
    })),
    page: 1,
    sizePerPage: 10,
    maxDisplayedData: 10,
    data: [],
    isEndOfData: true,
    tab: '1',
  });

  const needFetchMore = useRef(false);

  const fetchData = async () => {
    const data = [];
    for (let i = 1; i <= 40; i += 1) {
      data.push({
        impulsedirectID: i,
        createdAt: '11/11/2021',
        patientName: 'Bessie Cooper',
        facility: 'Saint Barnabas',
        studyType: 'MCT',
        studyDuration: 4320,
      });
    }
    setState({ data, isLoading: true });
  };

  const navigatePage = useCallback((newDataPage) => {
    if (newDataPage !== state.page) {
      if (newDataPage * state.sizePerPage >= state.data.length && !state.isEndOfData) {
        needFetchMore.current = true;
        fetchData({ cursor: state.data[state.data.length - 1].ticketId }, needFetchMore.current);
        setState({
          isLoading: false,
        });
      } else {
        setState({
          page: newDataPage,
          maxDisplayedData: state.maxDisplayedData + state.sizePerPage,
        });
        if (newDataPage * state.sizePerPage === state.data.length && state.isEndOfData) {
          toastrWarning('No more data', 'Load more datas', 2000);
        }
      }
    }
  }, [state.data, state.page, state.maxDisplayedData, state.isEndOfData, state.sizePerPage]);

  const onSizePerPageChange = (sizePerPage, page) => {
    // if (sizePerPage * page > state.data.length) {
    //   needFetchMore.current = true;
    //   _.assign(state, {
    //     isLoading: false,
    //     sizePerPage,
    //     page,
    //     maxDisplayedData: sizePerPage * page,
    //   });
    //   fetchData({ cursor: state.data[state.data.length - 1].ticketId }, false, false, (sizePerPage * page - state.data.length));
    // } else {
    //   setState({
    //     maxDisplayedData: sizePerPage * page,
    //     sizePerPage,
    //     page,
    //   });
    // }
  };

  const onClickSort = useCallback((field, order) => {
    // isInitial.current = true;
    // if (order !== filter.current.sortOrder) {
    //   filter.current.sortOrder = order;
    //   filter.current.cursor = undefined;
    // }
    // fetchData(filter.current, needFetchMore.current);
    // setState({
    //   isLoading: false,
    // });
  }, [state.sizePerPage]);

  useEffect(() => {
    fetchData();
  }, []);

  const caretRender = (order) => {
    if (order === 'desc' || order === undefined) {
      return (
        <div className="sort-icon-desc">
          <img className="caret-asc" src={IconCaretAsc} alt="Sort Caret" />
          {order === undefined
            ? <img className="caret-desc" src={IconCaretDesc} alt="Sort Caret" />
            : <img className="caret-desc-blue" src={IconCaretBlue} alt="Sort Caret" />}
        </div>
      );
    }

    if (order === 'asc') {
      return (
        <div className="sort-icon-asc">
          <img className="caret-asc" src={IconCaretBlue} alt="Sort Caret" />
          <img className="caret-desc" src={IconCaretDesc} alt="Sort Caret" />
        </div>
      );
    }
  };

  const formatRMAID = (cell, row, index, extra) => {
    const { isLoading } = extra;
    if (isLoading) {
      return (
        <div className="rmaId">
          {cell}
        </div>
      );
    }
    return (<Skeleton count={1} />);
  };

  const formatData = (cell, row, index, extra) => {
    const { isLoading } = extra;
    if (isLoading) {
      return cell || '--';
    }
    return (<Skeleton count={1} />);
  };

  const generateColumns = () => {
    const columns = [
      {
        dataField: 'impulsedirectID',
        text: 'RMA ID',
        formatter: formatRMAID,
        sort: true,
        headerStyle: {
          width: 150,
          display: 'flex',
          alignItems: 'center',
        },
        sortCaret: caretRender,
        onSort: (field, order) => {
          onClickSort(field, order);
        },
        sortFunc: () => { },
        formatExtraData: {
          isLoading: state.isLoading,
        },
      },
      {
        dataField: 'createdAt',
        text: 'Created At',
        formatter: formatData,
        formatExtraData: {
          isLoading: state.isLoading,
        },
      },
      {
        dataField: 'patientName',
        text: 'Patient Name',
        formatter: formatData,
        formatExtraData: {
          isLoading: state.isLoading,
        },
      },
      {
        dataField: 'facility',
        text: 'Facility',
        formatter: formatData,
        formatExtraData: {
          isLoading: state.isLoading,
        },
      },
      {
        dataField: 'studyType',
        text: 'Study Type',
        formatter: formatData,
        formatExtraData: {
          isLoading: state.isLoading,
        },
      },
      {
        dataField: 'studyDuration',
        text: 'Study Duration',
        formatter: formatData,
        formatExtraData: {
          isLoading: state.isLoading,
        },
      },
    ];
    return columns;
  };

  const rowStyle = {
    // height: 48,
    // background: 'red',
    // padding: 0,
  };

  const onSetTab = (tab) => {
    setState({ tab });
  };

  return (
    <div className="container-table">
      <PageHeader
        title="TABLE"
        subTitle="component"
        className="title-header-table"
      />
      <Divider />
      <Tabs defaultActiveKey={state.tab} onChange={onSetTab}>
        <TabPane tab="Large" key="1">
          <TableComponent
            isLarge
            rowStyle={rowStyle}
            className="table-react-next-custom"
            wrapperClasses="table-react-next-custom__rma"
            keyField="rmaId"
            isLoadedData={state.isLoading}
            data={state.isLoading ? state.data : state.skeletonPatient}
            columns={generateColumns()}
            page={state.page}
            sizePerPage={state.sizePerPage}
            maxDisplayedData={state.maxDisplayedData}
            navigatePage={navigatePage}
            onSizePerPageChange={onSizePerPageChange}
            isEndOfData={state.isEndOfData}
          />
        </TabPane>
        <TabPane tab="Small" key="2">
          <TableComponent
            rowStyle={rowStyle}
            className="table-react-next-custom"
            wrapperClasses="table-react-next-custom__rma"
            keyField="rmaId"
            isLoadedData={state.isLoading}
            data={state.isLoading ? state.data : state.skeletonPatient}
            columns={generateColumns()}
            page={state.page}
            sizePerPage={state.sizePerPage}
            maxDisplayedData={state.maxDisplayedData}
            navigatePage={navigatePage}
            onSizePerPageChange={onSizePerPageChange}
            isEndOfData={state.isEndOfData}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TablePage;
